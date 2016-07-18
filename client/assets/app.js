const app = angular.module('app', ['ngRoute'])

app.config(($routeProvider) => {
  $routeProvider
    .when('/new', {
      templateUrl: '../partials/new.html',
      controller: 'FriendsController',
      controllerAs: 'fc',
    })
    .when('/edit/:id', {
      templateUrl: '../partials/edit.html',
      controller: 'FriendsController',
      controllerAs: 'fc',
    })
});

/**
 * Now Just put controller in it.
 */


app.controller(
  'FriendsController',
    function( $location, $routeParams ){
      console.log('FriendsController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);
      this.newtext = 'new'
      this.edittext = 'edit'

      this.create = () => {
         console.log('FriendsController create')
         console.log(`first name:${this.firstName}  last name:${this.lastName}`)
      }

      this.update = () => {
         console.log('FriendsController update')
         console.log(`first name:${this.firstName}  last name:${this.lastName}`)
      }
    }
)
