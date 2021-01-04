const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  flight: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'flights',
    },
  ],
  persons: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

// Create the model class
const ModelClass = mongoose.model('orders', orderSchema);

// Export the model
module.exports = ModelClass;
