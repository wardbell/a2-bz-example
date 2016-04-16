/*global jasmine, __karma__, window*/
(function () {

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Cancel Karma's synchronous start,
// we call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function () { };

// SET THE RUNTIME APPLICATION ROOT HERE
var appRoot ='app'; // no trailing slash!

// RegExp for client application base path within karma (which always starts 'base\')
var karmaBase = '^\/base\/'; // RegEx string for base of karma folders
var appPackage = 'base/' + appRoot; //e.g., base/app
var appRootRe = new RegExp(karmaBase + appRoot + '\/');
var onlyAppFilesRe = new RegExp(karmaBase + appRoot + '\/(?!.*\.spec\.js$)([a-z0-9-_\.\/]+)\.js$');

var breezePackage = 'base/breeze';
var breezeRootRe = new RegExp(karmaBase + 'breeze\/');
var onlyBreezeFilesRe = new RegExp(karmaBase + 'breeze\/(?!.*\.spec\.js$)([a-z0-9-_\.\/]+)\.js$');

var moduleNames = [];

// Configure systemjs packages to use the .js extension for imports from the app folder
// TODO: should generate these barrel registrations on the fly
var packages = [
    'entities'
  ].reduce(function(barrelConfig, barrelName) {
    barrelConfig[appPackage + '/' + barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});

packages[appPackage] = {
  defaultExtension: 'js',
  format: 'register',
  map: Object.keys(window.__karma__.files)
    .filter(onlyAppFiles)
    // Create local module name mapping to karma file path for app files
    // with karma's fingerprint in query string, e.g.:
    // './hero.service': '/base/app/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
    .reduce(function (pathsMapping, appPath) {
      var moduleName = appPath.replace(appRootRe, './').replace(/\.js$/, '');
      pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
      return pathsMapping;
    }, {})
}

packages[breezePackage] = {
  defaultExtension: 'js',
  format: 'register',
  map: Object.keys(window.__karma__.files)
    .filter(onlyBreezeFiles)
    .reduce(function (pathsMapping, apiPath) {
      var moduleName = apiPath.replace(breezeRootRe, './').replace(/\.js$/, '');
      console.log(moduleName);
      pathsMapping[moduleName] = apiPath + '?' + window.__karma__.files[apiPath];
      return pathsMapping;
    }, {})
}

System.config({ packages: packages });

// Configure Angular for the browser and
// with test versions of the platform providers
  Promise.all([
    System.import('angular2/testing'),
    System.import('angular2/platform/testing/browser')
  ])
  .then(function (results) {
    var testing = results[0];
    var browser = results[1];
    testing.setBaseTestProviders(
      browser.TEST_BROWSER_PLATFORM_PROVIDERS,
      browser.TEST_BROWSER_APPLICATION_PROVIDERS);

    // Load all spec files
    // (e.g. 'base/app/hero.service.spec.js')
    return Promise.all(
      Object.keys(window.__karma__.files)
        .filter(onlySpecFiles)
        .map(function (moduleName) {
          moduleNames.push(moduleName);
          return System.import(moduleName);
        }));
  })

  .then(success, fail);

////// Helpers //////

function onlyAppFiles(filePath) {
  return onlyAppFilesRe.test(filePath);
}
function onlyBreezeFiles(filePath) {
  return onlyBreezeFilesRe.test(filePath);
}
function onlySpecFiles(filePath) {
  return /\.spec\.js$/.test(filePath);
}

function success () {
  console.log(
    'Spec files loaded:\n  ' +
    moduleNames.join('\n  ') +
    '\nStarting Jasmine testrunner');
  __karma__.start();
}

function fail(error) {
  __karma__.error(error.stack || error);
}

})();
