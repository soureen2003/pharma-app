const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  imageLink: String,
  experience: Number,
  contact_number: String,
  location: String,
  email: String,
});

// Explicitly map the schema to the 'doctor_db' collection
module.exports = mongoose.model('Doctor', doctorSchema, 'doctor_db');
