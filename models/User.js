// Import mongoose
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('User', userSchema);
