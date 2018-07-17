require('dotenv').config()
var cors = require('cors')

var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var Recipe = require('./api/models/recipeListModel')
var bodyParser = require('body-parser')
var logger = require('morgan')
var bodyLogger = require('morgan-body')
var bodyParser = require('body-parser')


mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_NAME}`)

app.use(logger('dev'))
// log request and response body
//app.use(bodyParser.json())
//bodyLogger(app)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/recipeListRoutes')
routes(app)

app.listen(port)
console.log('RESTful API server started on port ' + port)
