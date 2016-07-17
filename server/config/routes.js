console.log(' routes')

const mongoose = require('mongoose')

module.exports = (app) => {
  app.get('/friends'        , friends.index)
  app.get('/friends/:id'    , friends.show)
  app.post('/friends'       , friends.create)
  app.put('/friends/:id'    , friends.update)
  app.delete('/friends/:id' , friends.delete)
}
