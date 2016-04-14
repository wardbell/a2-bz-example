// attached zip has two entry points tsgen.ts and tsgen-core.  
// tsgen is for command line use; tsgen-core is for script use like below.

var tsGen = require('./tools/entityGenerator/tsgen-core');

gulp.task('generate-entities', function () {
    tsGen.generate({
        inputFileName: './app/entities/rifmweb.metadata.json',
        outputFolder: './app/entities',
        camelCase: true,
        baseClassName: 'EntityBase'
    });
});
