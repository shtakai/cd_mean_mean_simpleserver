console.log(' routes')

const mongoose = require('mongoose')

/*
 * we need to add a few lines of code up here.
 * what is this 'friend' object we are referencing below.
 */

const friends = require('../controllers/friends.js')
const customers = require('../controllers/customers.js')

module.exports = (app) => {
  app.get('/friends'        , friends.index)
  app.get('/friends/:id'    , friends.show)
  app.post('/friends'       , friends.create)
  app.put('/friends/:id'    , friends.update)
  app.delete('/friends/:id' , friends.delete)
  app.get('/customers'      , customers.index)
  app.post('/customers'     , customers.create)
}

/*
 * this adds route listeners to friends for restful routes
 */
