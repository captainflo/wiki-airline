const Cloudinary = require('../controllers/cloudinary');

module.exports = (app) => {
  // delete Image
  app.post('/api/delete/image', Cloudinary.deleteImage);
};
