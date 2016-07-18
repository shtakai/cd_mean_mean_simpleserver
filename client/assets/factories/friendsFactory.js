console.log('Friends Factory');
app.factory('friendsFactory',[
  '$http', ($http) => {
    let friends = []
    let friend = []
    console.log('$http', $http)

    function FriendsFactory(){
      const _this = this
      this.create = (newfriend, callback) => {
        console.log('FriendsFactory create', newfriend)
        $http.post('/friends', newfriend)
          .then( (returned_data ) => {
             console.log('FriendsFactory create returned_data',returned_data.data)
             if(typeof(callback) == 'function'){
               callback(returned_data.data)
             }
          } )
      }

      this.update = () => {
         // what parameters do we need?
        // code
      }

      this.index = (callback) => {
        // call this method if you want to update or set the friends variable
        $http.get('/friends').then((returned_data) => {
          console.log(returned_data.data)
          friends = returned_data.data
          callback(friends)
        })
      /**
       * NOTE: this can be shortened to $http.get('/friends').then(callback)
       *   But only if you only want to runt hte callback from the controller
       */
      }

      this.delete = () => {
         // code
      }

      this.show = (id, callback) => {
         //code
        console.log('------id:', id)
        console.log(`FriendsFactory#show ${id}`)
        $http.get(`/friends/${id}`)
          .then( (returned_data) => {
             console.log(`returned_data ${returned_data.data}`)
             callback(returned_data.data)
          } )

      }

      // sometimes you might not want to make a db call,
      //  and just get the information stored in the factory.
      this.getFriends = (callback) => {
         callback(friend)
      }

      this.getFriend = (callback) => {
         callback(friend)
      }

    }
    console.log(new FriendsFactory())
    return new FriendsFactory()
  }
])
