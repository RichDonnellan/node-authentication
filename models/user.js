var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var bcrypt      = require('bcrypt');
var userSchema  = new Schema({
  name: String,
  email: { type: String, require: true },
  password: { type: String, require: true }
});

// use bcrypt to hash the user password
userSchema.pre('save', function(next) {
  var user = this;
  var hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  next();
});

userSchema.methods.authentication = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
}

var User = mongoose.model('User', userSchema);

module.exports = User;
