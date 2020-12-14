const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  avatar: {
    type: String,
    default:
      'https://helenkellerfestival.com/site/wp-content/uploads/2018/06/ticket.jpg',
  },
  firstName: String,
  lastName: String,
});

// On save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function (next) {
  // get access to the user model
  const user = this;
  // generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    // hash (encrypt) our password using salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return next(err);
    }
    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongoose.model('users', userSchema);

// Export the model
module.exports = ModelClass;
