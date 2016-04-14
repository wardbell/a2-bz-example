var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var taskListing = require('gulp-task-listing');
var tsGen = require('./tools/entityGenerator/tsgen-core');

// Public tasks

gulp.task('default', ['help']);

gulp.task('help', taskListing.withFilters(function (taskName) {
  var isSubTask = taskName.substr(0, 1) == "_";
  return isSubTask;
}, function (taskName) {
  var shouldRemove = taskName === 'default';
  return shouldRemove;
}));

gulp.task('generate-entities', function () {
  // make sure outputFolder exists first!
  // create and add 'EntityBase' to this output folder
  var outputFolder = './app/entities/';

  var metadataFilename = outputFolder + 'northwind.bz.metadata.json';
  var outputTsFilename = outputFolder + 'northwind.bz.metadata.ts';

  // create a TS version of metadata for importing
  var metadata = fs.readFileSync(metadataFilename, 'utf8');
  var before = '/* tslint:disable:quotemark *' + '/\nconst metadata = ';
  var after = ';\nexport const METADATA = JSON.stringify(metadata);\n';
  var ts = before + metadata + after;
  fs.writeFileSync(outputTsFilename, ts, 'utf8');

  // generate TS entity model classes for this metadata
  tsGen.generate({
    inputFileName: metadataFilename,
    outputFolder: outputFolder,
    camelCase: false,
    baseClassName: 'EntityBase'
  });
});
