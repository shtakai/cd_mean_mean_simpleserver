console.log('friends controller')

/*
 * we need to add a few lines of code here.
 *
 * how does a controller talk to mongoose and get a model?
 * build out the methods in the this controller.
 */

// load Friend model
const mongoose = require('mongoose')
const faker = require('faker')
const Friend = mongoose.model('Friend')




function FriendsController() {
  this.index = (req, res) => {
    Friend.find({})
      .sort({created_at: -1})
      .exec( (err, friends) => {
        if(err){
          res.json(err);
        }else{
          res.json({friends: friends})
        }
      }
    )
  }

  this.create = (req, res) => {

    res.json({placeholder: 'create'})
  }

  this.update = (req, res) => {

    res.json({placeholder: 'update'})
  }

  this.delete = (req, res) => {
    Friend.remove({
      _id: req.params.id
    })
    .exec( (err) => {
      if(err){
        req.json(err)
      }else{
        res.json({deleted: req.params.id})
      }
    } )
  }

  this.show = (req, res) => {
    Friend.findOne({
      _id: req.params.id
    })
    .exec( (err, friend) => {
      if(err){
        res.json(err)
      }else{
        res.json({
          friend: friend
        })
      }
    })
  }

}

// export
module.exports = new FriendsController();

