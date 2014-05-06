angular.module '<%= _.slugify(appname) %>', [ 'ngRoute','<%= _.slugify(appname) %>-main','templates' ]
  
  .config ($routeProvider) ->

    $routeProvider
      .otherwise
        redirectTo: '/'