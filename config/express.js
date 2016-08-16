var
// config = require('./config'),
express = require('express'),
 morgan = require('morgan'),
 compress = require('compression'),
 bodyParser = require('body-parser'),
methodOverride = require('method-override'),
cors = require('cors');

module.exports = function(){
  var app = express();



  if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === "production"){
    app.use(compress());
  }

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));


  app.use(bodyParser.json());
  app.use(methodOverride());


  app.set('view engine', 'ejs');

  require('../app/routes/index.server.routes')(app);

    app.use(express.static('./public'));

  return app;


};
