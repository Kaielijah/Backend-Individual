;var express = require('express');
var morgan = require('morgan');
var compress = require('compress');

module.exports = function(){
  var app = express();
if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'));
}else if (process.env.NODE_ENV === 'production'){
  app.use(compress());
}

};
