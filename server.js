require('dotenv').config()
const port = process.env.PORT || 8000

const express = require('express')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// set static directory
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './bower_components')))

// load mongoose/model
require('./server/config/mongoose.js')

// route_setter
require('./server/config/routes.js')(app)





let server = app.listen(port, () =>{
  console.log(`server listening on TCP/${port}`)
})



