module.exports = function(app) {
  var myController = require('../controllers/aboutself.server.controller');

  // routing
  app.get('/kayden', myController.index);
};
