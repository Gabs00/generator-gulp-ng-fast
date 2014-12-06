# generator-gulp-ng-fast

This is a yeoman generator for an AngularJS project that follows the [Best Practice Recommendations for Angular App Structure][1]. It's based on [generator-gulp-ng][8] by [Jessie Evangelista][7] with additions to support Coffeescript, Less and Jade files for _fast_er development.

Uses Gulp (now I'm convinced by JS build tools!), Bower and NPM.

## GENERATED DIRECTORY STRUCTURE

    app/
      components/
        app_service.js
        app_service_test.js
      main/
        main.html
        main_controller.js
        main_controller_test.js
      app.css
      app.js
      app_controller.js
      app_controller_test.js
      index.html
    bower_components/
    node_modules/
    .bowerrc
    .gitignore
    README.md
    bower.json
    gulpgile.js
    karma-unit.js
    package.json

## FEATURES

- Follows the recommended best practice project structure for AngularJS
- All Coffee/JS files in the app folder are compiled and concatenated into `build/app.js`
- All Jade/HTML files in the app folder except `index.html` are concatenated and compiled into a JS file: `build/templates.js` and loaded into AngularJS `templateCache`
- All Less/CSS files in the app folder are concatenated into `build/app.css`
- All JS files in the `bower_components` folder are concatenated into `build/lib.js`
- All CSS files in the `bower_components` folder are concatenated into `build/lib.css`
- `index.jade`/`index.html` is compiled/copied to `build/index.html`
- A static server is run at port 9000 with livereload support
- When any HTML, JS or CSS file in the build folder changes, they are autoreloaded on the browser
- Karma test runner will automatically run unit tests when relevant files change

-----

## Prerequisites

- node.js [http://nodejs.org/][2]
- npm [http://www.npmjs.org/][3]
- bower [http://bower.io/][4]
- gulp.js [http://gulpjs.com/][5]
- karma-cli [http://karma-runner.github.io/][9]

## Usage

    npm install -g generator-gulp-ng-fast
    mkdir my-app && cd my-app && yo gulp-ng-fast
    npm install
    npm install -g karma-cli
    bower install
    gulp
    karma start karma-unit.js

Then you can open your browser on `http://localhost:9000` and start hacking!

## Support

For questions and issues: [https://github.com/rchampourlier/generator-gulp-ng-fast/issues][6]

  [1]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
  [2]: http://nodejs.org/
  [3]: http://www.npmjs.org/
  [4]: http://bower.io/
  [5]: http://gulpjs.com/
  [6]: https://github.com/rchampourlier/generator-gulp-ng-fast/issues
  [7]: https://github.com/henyojess/generator-gulp-ng
  [8]: https://github.com/henyojess
  [9]: http://karma-runner.github.io/
