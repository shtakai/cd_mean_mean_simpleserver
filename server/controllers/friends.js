console.log('friends controller')

/*
 * we need to add a few lines of code here.
 *
 * how does a controller talk to mongoose and get a model?
 * build out the methods in the this controller.
 */

function FriendsController() {
  this.index = (req, res) => {

    res.json({placeholder: 'index'})
  }

  this.create = (req, res) => {

    res.json({placeholder: 'create'})
  }

  this.update = (req, res) => {

    res.json({placeholder: 'update'})
  }

  this.delete = (req, res) => {

    res.json({placeholder: 'delete'})
  }

  this.show = (req, res) => {

    res.json({placeholder: 'show'})
  }

}

// export
module.exports = new FriendsController();

