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

    friendsFactory.getFriend((returnedData) => {
      this.friend = returnedData
      console.log(this.friend)
    })

    /**
     * OUR $scope.update function goes here <-- $scope because we need to
     * access this method with ng-submit or ng-click (from the form in the
     * previous assignment).  Want to see all of the friends when we get
     * back including the updated on??  See Index in the previous controller.
     */
  }
)
