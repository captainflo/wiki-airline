const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:3001' }));
  app.use(proxy('/auth/instagram', { target: 'http://localhost:3001' }));
  app.use(proxy('/auth/facebook', { target: 'http://localhost:3001' }));
  app.use(proxy('/auth/linkedin', { target: 'http://localhost:3001' }));
  app.use(proxy('/api/**', { target: 'http://localhost:3001' }));
  app.use(proxy('/signin', { target: 'http://localhost:3001' }));
  app.use(proxy('/signup', { target: 'http://localhost:3001' }));
  app.use(proxy('/signout', { target: 'http://localhost:3001' }));
};
