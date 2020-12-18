const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const flightSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  depart: {
    type: Date,
    required: true,
  },
  depTime: {
    type: Date,
    required: true,
  },
  arrTime: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
});

// Create the model class
const ModelClass = mongoose.model('flights', flightSchema);

// Export the model
module.exports = ModelClass;
