'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GulpNgGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('This generator will generate a web app project using Gulp, Bower, AngularJS with Coffeescript, Less and Jade support.'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.copy('app/_app.less', 'app/app.less');
    this.copy('app/_app.coffee','app/app.coffee');
    this.copy('app/_app_controller.coffee','app/app_controller.coffee');
    this.copy('app/_index.jade','app/index.jade');

    this.mkdir('app/components');
    this.copy('app/components/_app_service.coffee', 'app/components/app_service.coffee');

    this.mkdir('app/main');
    this.copy('app/main/_main.jade', 'app/main/main.jade');
    this.copy('app/main/_main_controller.coffee', 'app/main/main_controller.coffee');

    this.mkdir('test');
    this.copy('test/_karma-unit.js', 'test/karma-unit.js');
    this.copy('test/_app_controller_test.coffee', 'test/app_controller_test.coffee');
    this.copy('test/components/_app_service_test.coffee', 'test/components/app_service_test.coffee');
    this.copy('test/main/_main_controller_test.coffee', 'test/main/main_controller_test.coffee');
  },

  projectfiles: function () {    
    this.copy('_bowerrc', '.bowerrc');    
    this.copy('_bower.json', 'bower.json');    
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
  }
});

module.exports = GulpNgGenerator;