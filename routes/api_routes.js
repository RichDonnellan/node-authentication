var usersController = require('../controllers/users_controller.js');
var apiRouter       = require('express').Router();

apiRouter.route('/users/:email')
  .get(usersController.showUser);

apiRouter.route('/users')
  .post(usersController.createUser);

apiRouter.route('/signin')
  .post(usersController.signIn);

module.exports = apiRouter;
