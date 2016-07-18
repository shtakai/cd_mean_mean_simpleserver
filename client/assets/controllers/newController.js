app.controller(
  'newController',
    function( $location, $routeParams ){
      console.log('newController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);
      this.newtext = 'new'

      this.create = () => {
         console.log('newController create')
         console.log(`first name:${this.firstName}  last name:${this.lastName}`)
      }

    }
)
