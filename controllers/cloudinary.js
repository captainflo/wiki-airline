const cloudinary = require('cloudinary').v2;
const key = require('../config/keys');

cloudinary.config({
  cloud_name: key.cloudinaryClientName,
  api_key: key.cloudinaryClientID,
  api_secret: key.cloudinaryClientSecret,
});

exports.deleteImage = function (req, res, next) {
  cloudinary.uploader.destroy(req.body.img);
};
