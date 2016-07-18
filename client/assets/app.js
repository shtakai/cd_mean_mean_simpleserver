const app = angular.module('app', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/index.html',
      controller: 'newController',
      controllerAs: 'c',
    })
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
    .when('/delete/:id', {
      templateUrl: '../partials/delete.html',
      controller: 'deleteController',
      controllerAs: 'c',
    })
    .when('/edit/:id', {
      templateUrl: '../partials/edit.html',
      controller: 'editController',
      controllerAs: 'c',
    })
    .otherwise({
      redirectTo: '/'
    })
    //.when('/update/d', {
      //templateUrl: '../partials/update.html',
      //controller: 'updateController',
      //controllerAs: 'c',
    //})
});

/**
 * Now Just put controller in it.
 */


