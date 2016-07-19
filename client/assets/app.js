const app = angular.module('app', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/index.html',
      controller: 'FriendsController',
      controllerAs: 'c',
    })
    .when('/new', {
      templateUrl: '../partials/new.html',
      controller: 'FriendsController',
      controllerAs: 'c',
    })
    .when('/show/:id', {
      templateUrl: '../partials/show.html' ,
      controller: 'FriendsController',
      controllerAs: 'c',
    })
    .when('/delete/:id', {
      controller: 'FriendsController',
      controllerAs: 'c',
    })
    .when('/update/:id', {
      controller: 'FriendsController',
      controllerAs: 'c',
    })
    .when('/edit/:id', {
      templateUrl: '../partials/edit.html',
      controller: 'FriendsController',
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


