require('dotenv').config();
var cors = require('cors');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Recipe = require('./api/models/recipeListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/recipeListRoutes');
routes(app);

app.listen(port);

console.log("RESTful API server started on port " + port);


