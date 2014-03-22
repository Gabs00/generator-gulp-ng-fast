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
    this.copy('_app.less', 'app/app.less');
    this.copy('_app.coffee','app/app.coffee');
    this.copy('_app_controller.coffee','app/app_controller.coffee');
    this.copy('_app_controller_test.coffee','app/app_controller_test.coffee');
    this.copy('_index.jade','app/index.jade');

    this.mkdir('app/components');
    this.copy('components/_app_service.coffee', 'app/components/app_service.coffee');
    this.copy('components/_app_service_test.coffee', 'app/components/app_service_test.coffee');

    this.mkdir('app/main');
    this.copy('main/_main.jade', 'app/main/main.jade');
    this.copy('main/_main_controller.coffee', 'app/main/main_controller.coffee');
    this.copy('main/_main_controller_test.coffee', 'app/main/main_controller_test.coffee');
  },

  projectfiles: function () {    
    this.copy('_bowerrc', '.bowerrc');    
    this.copy('_bower.json', 'bower.json');    
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
  }
});

module.exports = GulpNgGenerator;