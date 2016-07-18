app.controller(
  'newController',
    function( friendsFactory, $location, $routeParams ){

      console.log('newController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);
      this.newtext = 'new'

      this.create = () => {
         console.log('newController create')
         console.log(`first name:${this.firstName}  last name:${this.lastName}`)
      }

      /**
       *   THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS
       *   THE FRIENDS INDEX.
       *   WE MIGHT RE USE INDEX A FEW TIMES,
       *   SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
       */

      let index = () => {
        friendsFactory.index((returnedData) => {
          this.friends = returnedData
          console.log(this.friends)
        })
      }
      index()
      /**
       *  OUR $scope.create function goes here <--
       *  $scope because we need to access this method with ng-submit or
       *  ng-click (from the form in the previous assignment).
       *  Want to all of the friends when we get back?  We can re-run index.
       */
    }
)
