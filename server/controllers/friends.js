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

  // NOTE: when using Postman,
  //  POST > Body > x-www-form.urlencoded
  this.create = (req, res) => {
    let _friend = new Friend()
    _friend.first_name = req.body.first_name
    _friend.last_name = req.body.last_name
    _friend.save( (err, friend) => {
      if(err){
        res.json(err)
      }else {
        res.json({ friend: friend })
      }
    } )
  }

  this.update = (req, res) => {
    Friend.findOneAndUpdate(
      {_id: req.params.id},
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      },{
        new: true
      }, (err, friend) => {
        if(err){
          res.json(err)
        }else {
          res.json({ friend: friend })
        }
      }
    )
  }

  this.delete = (req, res) => {
    Friend.findOneAndRemove(
      {
      _id: req.params.id
      }, (err) => {
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

