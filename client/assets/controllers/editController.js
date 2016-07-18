app.controller(
  'editController',
    function( $location, $routeParams ){
      console.log('editController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);
      this.edittext = 'edit'

      this.update = () => {
         console.log('editController update')
         console.log(`first name:${this.firstName}  last name:${this.lastName}`)
      }
    }
)
