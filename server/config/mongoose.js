require('dotenv').config()
const dbURL = process.env.DB_URL
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const reg = new RegExp('.js$', 'i')

mongoose.connect(dbURL)

const modelsPath = path.join( __dirname, './../models' )

fs.readdirSync(modelsPath).forEach( (file) => {
  if( reg.test( file )){
    require(`${modelsPath}/${file}`)
  }
} )
