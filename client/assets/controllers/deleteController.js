
app.controller(
  'deleteController',
  function(friendsFactory, $location, $routeParams){
    console.log('deleteController')
    console.log('routeParams', $routeParams)

    let _delete = (id) => {
       console.log('deleteController#delete', id)
       friendsFactory.delete(id, (returned_data) => {
         console.log('C returned_data', returned_data)
        $location.url('/')
       })
    }

    _delete($routeParams.id)

  }
)
