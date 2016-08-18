// MY MAIN APP JS
//CONSTANT VARIABLE, DON'T CHANGE
var jwt_secret = 'superfreckingsupercalifragilisticex';
var mongo_url = process.env.MONGODB_URI || 'mongodb://<dbuser>:<dbpassword>@ds161255.mlab.com:61255/backend-individual';
var express = require('./config/express'),
    mongoose = require('./config/mongoose');


//require mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);

// require installed modules
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var jwt = require ('jsonwebtoken');

// var db = mongoose();
var app = express();



    app.set('port', (process.env.PORT || 3000));

    app.listen(app.get('port'), function() {
      console.log('My express server is running at localhost', app.get('port'));
    });

    module.exports = app;
