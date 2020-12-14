const Authentication = require('../controllers/authentication');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // Signup by Email with JWT
  app.post('/signup', Authentication.signup);
  // Signin by Email with JWT
  app.post('/signin', requireSignin, Authentication.signin);
  // Current User
  app.post('/api/user', Authentication.currentUser);

  // Show by id with JWT
  app.get('/api/user/:id', Authentication.fetchUser);
  // Edit by id with JWT
  app.post('/api/user/:id', Authentication.editUser);
  // delete by id with JWT
  app.delete('/api/user/:id', Authentication.deleteUser);

  // Logout user
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
