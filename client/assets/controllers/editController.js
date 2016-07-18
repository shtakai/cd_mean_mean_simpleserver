app.controller(
  'editController',
  function( friendsFactory, $location, $routeParams ){
    console.log('editController start');
    console.log('routeParams', $routeParams)
    console.log('location', $location);
    this.edittext = 'edit'
    /**
     * GET A FRIEND FROM THE FACTORY, This is a one time thing when
     * we load this partial, so we didn't set a variable so we could reuse it,
     * rather, just ran the friendsFactory method directly.
     */

    friendsFactory.show($routeParams.id, (returned_data) => {
      this.friend = returned_data.friend
      console.log(this.friend)
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
        {first_name: this.friend.first_name, last_name: this.friend.last_name},
        (returned_data) => {
        console.log('returned data', returned_data)
        $location.url('/')

      })
    }

  }
)