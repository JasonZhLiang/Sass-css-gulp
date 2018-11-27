const gulp = require('gulp'), sass = require('gulp-sass');


gulp.task('styles', () => {
    return gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});


//then run: node_modules\.bin\gulp styles
//the css folder with styles.css will be compile down


gulp.task('watch', ()=>{
    gulp.watch('./sass/**/*.scss', ['styles']);//any sass files inside this folder and sub-folder with any changes will run 'styles' task.
});

gulp.task('default', ['styles']); // default task means when npm run gulp, will do not need task name


//after set up package.json file with concurrently plug in, have 'start' script like "npm run gulp && concurrently \"npm run gulp-watch\" \"npm run lite\""
// if error shows 'spawn cmd.exe ENOENT', that means you will need add director to variable PATH: path C:\Windows\System32;%PATH%