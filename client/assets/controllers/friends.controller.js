
angular.module('app').controller(
  'FriendsListController',
    function( friendsFactory, $location, $routeParams ){

      console.log('FriendsController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);


      /**
       *   THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS
       *   THE FRIENDS INDEX.
       *   WE MIGHT RE USE INDEX A FEW TIMES,
       *   SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
       */

      /**
       * grab -> show all friends
       */
      this.index = () => {
        friendsFactory.index((returnedData) => {
          this.friends = returnedData.friends
          console.log('index',this.friends)
        })
      }
    }
)

angular.module('app').controller(
  'FriendsCreateController',
    function( friendsFactory, $location, $routeParams ){
      /**
       *  OUR $scope.create function goes here <--
       *  $scope because we need to access this method with ng-submit or
       *  ng-click (from the form in the previous assignment).
       *  Want to all of the friends when we get back?  We can re-run index.
       */
      console.log('------------')

      this.create = () => {
        friendsFactory.create(
          { first_name: this.firstName, last_name: this.lastName, birthday: this.birthday},
          (returnedData) => {

          console.log('newController#create', returnedData)
          this.firstName = ""
          this.lastName = ""
          $location.path('/')
        })
      }
    }
)

angular.module('app').controller(
  'FriendsDeleteController',
    function( friendsFactory, $location, $routeParams ){
      /**
       * delete friend
       */
      this.delete = (id) => {
        console.log('deleteController#delete', id)
        friendsFactory.delete(id, (returned_data) => {
          console.log('C returned_data', returned_data)
        })
      _delete($routeParams.id)
      $location.url('/')
      }

    }
)

angular.module('app').controller(
  'FriendsGetController',
    function( friendsFactory, $location, $routeParams ){

      /**
       * GET A FRIEND FROM THE FACTORY, This is a one time thing when
       * we load this partial, so we didn't set a variable so we could reuse it,
       * rather, just ran the friendsFactory method directly.
       */

      console.log('$routeParams', $routeParams.id)
      this.show = (id) => {
        console.log('showController show')
        friendsFactory.show(id, (returned_data) => {
          console.log('C returned_data', returned_data.friend)
          this.friend = returned_data.friend
        })
      }

      this.show($routeParams.id)

    }
)

angular.module('app').controller(
  'FriendsEditController',
    function( friendsFactory, $location, $routeParams ){

      friendsFactory.show($routeParams.id, (returned_data) => {
        console.log('C returned_data', returned_data.friend)
        this.friend = returned_data.friend
      })
      /**
       * OUR $scope.update function goes here <-- $scope because we need to
       * access this method with ng-submit or ng-click (from the form in the
       * previous assignment).  Want to see all of the friends when we get
       * back including the updated on??  See Index in the previous controller.
       */
      this.update = (id) => {
        console.log(`updateController#update ${id}`)
        friendsFactory.update(
          id,
          {first_name: this.friend.first_name, last_name: this.friend.last_name, birthday: this.birthday},
          (returned_data) => {
            console.log('returned data', returned_data)
            $location.url('/')
          })
      }

})
