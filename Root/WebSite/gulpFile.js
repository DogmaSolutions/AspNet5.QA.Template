/// <binding AfterBuild='build-scss'/>

const gulp = require('gulp');
const glob = require("glob");
const fs = require("fs");
const scss = require("sass");
const eslint = require('gulp-eslint');

// Build SCSS files
gulp.task("build-scss", callback => {
    const options = {
        realpath: true,
        nodir: false
    };

    console.log('START SCSS Compile');
    // TODO: define here the SCSS target files
    glob("wwwroot/scss/*.scss", options, async (er, files) => {
        if (er) {
            console.error(er);
            callback(er);
        } else {
            for (const f of files) {
                await compileScss(f);
            }
        }
        callback();
        console.log('END SCSS Compile');
    });
});

// Execute ESLint on the targeted JS files
gulp.task("run-eslint", callback => {
    const options = {
        realpath: true,
        nodir: false,
        recursive: true
    };

    const processFilesInPath = (pathToExplore) => {
        console.log('STARTING ESLint in ' + pathToExplore);
        glob(pathToExplore, options, async (er, files) => {
            if (er) {
                console.error(er);
                callback(er);
            } else {
                for (const f of files) {
                    // TODO: set here the well-known excepions
                    if (!f.endsWith('.min.js') && !f.endsWith('signalr.js')) {
                        runEsLint(f);
                    }
                }
            }
            callback();
            console.log('COMPLETED ESLint in ' + pathToExplore);
        });
    };

    // TODO: define here the target folders
    processFilesInPath("wwwroot/js/**/*.js");
});


function compileScss(filePath) {
    console.log('Compile:', filePath);
    let outputPath = filePath.substr(0, filePath.lastIndexOf('.scss')) + '.css';
    outputPath = outputPath.replace('\\scss\\', '\\css\\');
    const mapPath = outputPath + '.map';
    console.log('Out file:', outputPath);
    return new Promise((resolve, reject) => {
        scss.render({
            file: filePath,
            outFile: outputPath,
            sourceMap: true,
            verbose: true,
            outputStyle: 'compressed'
        }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                let writeableStream = fs.createWriteStream(outputPath);
                writeableStream.write(result.css);
                writeableStream = fs.createWriteStream(mapPath);
                writeableStream.write(result.map);
                resolve(result);
            }
        });
    });
}

function runEsLint(filePath) {
    // TODO: customize here how you want to generate your output
    gulp.src(filePath).pipe(eslint()).pipe(eslint.format('visualstudio')).pipe(eslint.failAfterError());
    /*
    var esLintOptions = {};
    esLintOptions.fix = true;
    gulp.src(filePath).pipe(eslint(esLintOptions)).pipe(eslint.format('visualstudio')).pipe(gulp.dest(file => file.base)).pipe(eslint.failAfterError());
    */
}