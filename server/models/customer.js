const bcrypt         = require('bcrypt')
const mongoose       = require('mongoose')
const Schema         = mongoose.Schema
const customerSchema = new Schema({
  name: {
    first: {
      type: String,
      required: [true, "this is for something else"],
      trim: true,
    },
    last: {
      type: String,
      required: true,
      trim: true
    },
  },


  phone: {
    type: String,
    validate: [{
      validator: function( number ) {
        return /\d{3}-\d{3}-\d{4}/.test( number );
      },
      message: "{ VALUE } is not a valid phone number"
    },
    //{
    //validator: function( number ) {
    //return false;
    //},
    //message: "{ VALUE } failed this validator"
    //}
    ],
    required: [true, "Customer phone number required"]
  },


  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    uppercase: true,
    trim: true,
    default: "MALE"
  },


  age: {
    type: Number,
    min: [18, "Maybe you need to be a little older"],
    max: [85, "You might want to be enjoying your retirement rather than using this site"],
    required: true
  },


  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 32,
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    },
    //set: (pw) => {
      //this._pw = this.password
      //return pw
    //}
  },


  pets: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }],
    default: []
  }


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// custom method
customerSchema.method.doTest = (input) => {
   return this.age + " " + input
}

// pre save
customerSchema.pre('save', (done) => {
  console.log('presave')
  console.log(this)
  //let tmppw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  // Generate a salt
  //var salt = bcrypt.genSaltSync(10);
  // Hash the password with the salt
  var hash = bcrypt.hashSync("my password", bcrypt.genSaltSync(10));
  console.log('temppw', hash)
  done()
})


customerSchema.virtual( 'name.full' ).get( function () {
  return this.name.first + " " + this.name.last;
  // return `${ this.name.first } ${ this.name.last}`;
});
// register
const Customer = mongoose.model('Customer', customerSchema)
