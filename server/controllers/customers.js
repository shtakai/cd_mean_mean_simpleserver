console.log('customers controller')

/*
 * we need to add a few lines of code here.
 *
 * how does a controller talk to mongoose and get a model?
 * build out the methods in the this controller.
 */

// load Customer model
const mongoose = require('mongoose')
const faker = require('faker')
const Customer = mongoose.model('Customer')

function CustomersController() {
  this.index = (req, res) => {
    console.log('CustomersController#index')
    Customer.find({})
      .sort({created_at: -1})
      .exec( (err, customers) => {
        if(err){
          res.json(err);
        }else{
          res.json({customers: customers})
        }
      }
    )
  }

  // NOTE: when using Postman,
  //  POST > Body > x-www-form.urlencoded
  this.create = (req, res) => {
    console.log('CustomersController#create',req.body)
    let _customer = new Customer(req.body)
    console.log(_customer)
    _customer.save( (err, customer) => {
      if(err){
        res.json(err)
      }else {
        console.log(customer)
        res.json({ customer: customer })
      }
    } )
  }

}

// export
module.exports = new CustomersController();

