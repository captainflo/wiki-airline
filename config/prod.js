// prod.js - production keys here!!!
module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishablekey: process.env.STRIPE_PUBLISH,
  stripeSecretkey: process.env.STRIPE_SECRET,
  secret: process.env.SECRET,
  sendGrid: process.env.SENDGRID,
  cloudinaryClientName: process.env.CLOUDINARY_NAME,
  cloudinaryClientID: process.env.CLOUDINARY_CLIENT_ID,
  cloudinaryClientSecret: process.env.CLOUDINARY_CLIENT_SECRET,
};
