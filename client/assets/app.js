const app = angular.module('app', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/index.html',
      controller: 'FriendsListController',
      controllerAs: 'c',
    })
    .when('/new', {
      templateUrl: '../partials/new.html',
      controller: 'FriendsCreateController',
      controllerAs: 'c',
    })
    .when('/show/:id', {
      templateUrl: '../partials/show.html' ,
      controller: 'FriendsGetController',
      controllerAs: 'c',
    })
    .when('/delete/:id', {
      controller: 'FriendsDeleteController',
      controllerAs: 'c',
    })
    .when('/edit/:id', {
      templateUrl: '../partials/edit.html',
      controller: 'FriendsEditController',
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


