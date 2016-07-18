const app = angular.module('app', ['ngRoute'])

app.config( ($routeProvider) => {
  console.log('app-config')
  // Routes to load your new and edit pages with new and edit
  //  controllers attached to them!
  $routeProvider
    .when('/new', {
      templateUrl: '../partials/new.html',
      controller: 'FriendsController',
      controllerAs: 'FC',
    })
    .when('/edit/:id', {
      //  /edit/:id ?
      templateUrl: '../partials/edit.html',
      controller: 'FriendsController',
      controllerAs: 'FC',
    })
    .otherwise({
      redirectTo: '/',
    })

} )


/**
 * Now Just put controller in it.
 */

app.controller(
  'FriendsController',
  (FriendsController, $location, $routeParams) => {
     console.log('FriendsController start')
  }
)
