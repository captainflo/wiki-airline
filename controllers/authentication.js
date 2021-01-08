const User = require('../models/User');
const jwt = require('jwt-simple');
const config = require('../config/keys');
const bcrypt = require('bcrypt-nodejs');

// function for uncode user
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, email: user.email, iat: timestamp },
    config.secret
  );
}

// Function for decode user
function decodeTokenForUser(token) {
  return jwt.decode(token, config.secret);
}

// Current User
exports.currentUser = function (req, res) {
  const user = decodeTokenForUser(req.body.token);
  res.send(user);
};

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }
  // See if user with the given email exists
  User.findOne({ email: email }, function (error, existingUser) {
    if (error) {
      return next(error);
    }
    // if a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // if a user with email does not exist, create and save record
    const user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    user.save(function (error) {
      if (error) {
        return next(error);
      }
      // respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.signin = function (req, res, next) {
  // user has already had their email and password auth
  // we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.fetchUser = function (req, res, next) {
  User.findOne({ _id: req.params.id }, function (error, user) {
    if (error) {
      return next(error);
    }
    res.send(user);
  });
};

exports.editUser = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (password != undefined) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, null, function (err, hash) {
        req.body.password = hash;
      });
    });
  }
  // See if user with the given email exists
  User.findOne({ email: email }, function (error, existingUser) {
    if (error) {
      return next(error);
    }
    // if a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // if a user with email does not exist, create and save record
    User.findByIdAndUpdate(req.params.id, req.body).then(function (user) {
      res.json(user);
    });
  });
};

exports.deleteUser = function (req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      res.json(err);
    });
};
