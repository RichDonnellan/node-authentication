var User = require('../models/user.js');

function create(req, res) {
  var user = new User(req.body.user);
  user.save(function(err) {
    if (err) res.json({ err: err});
    res.json({ message: 'The user was successfully created.' });
  });
}

function show(req, res) {
  User.find({ email: req.params.email }, function(err, user) {
    if (err) res.json({err: err})
    res.json(user);
  });
}

function signIn(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) res.json({err: err});
    if (user) {
      if (user.authentication(req.body.password)) {
        res.json({message: 'User has successfully signed in.'})
      } else {
        res.json({message: 'Failed to sign in.'})
      }
    } else {
      res.json ({ message: 'User not found.' });
    }
  });
}

module.exports = {
  createUser: create,
  showUser: show,
  signIn: signIn
}
