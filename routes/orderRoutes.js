const Order = require('../controllers/order');

module.exports = (app) => {
  // Create order
  app.post('/api/order/new', Order.createOrder);

  // Fetch All orders By UserId
  app.post('/api/orders', Order.fetchAllOrdersByUserId);

  // // Fetch order
  // app.get('/api/order/:id', Order.fetchOrder);

  // // Delete order
  // app.delete('/api/order/:id', Order.deleteOrder);

  // // Update order
  // app.post('/api/order/:id', Order.updateOrder);
};
