console.log('friend model')

var mongoose = require('mongoose')

// schema and register
const FriendSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


// register
const Friend = mongoose.model('Friend', FriendSchema)
