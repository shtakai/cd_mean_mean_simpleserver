const app = angular.module('app', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/new', {
      templateUrl: '../partials/new.html',
      controller: 'newController',
      controllerAs: 'c',
    })
    .when('/show/:id', {
      templateUrl: '../partials/show.html' ,
      controller: 'showController',
      controllerAs: 'c',
    })
    .when('/edit/:id', {
      templateUrl: '../partials/edit.html',
      controller: 'editController',
      controllerAs: 'c',
    })
});

/**
 * Now Just put controller in it.
 */


