app.controller(
  'showController',
  function(friendsFactory, $location, $routeParams){
    console.log('showController')
    console.log('location', $location)
    console.log('routeparams', $routeParams)
    console.log('routeparams.id', $routeParams.id)


    let show = (id) => {
      console.log('showController show')
      friendsFactory.show(id, (returned_data) => {
        console.log('C returned_data', returned_data.friend)
        this.friend = returned_data.friend
      })
    }

    show($routeParams.id)


  }
)
