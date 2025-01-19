const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor'); // Correct path to the model

// GET: Fetch all doctors
router.get('/resource', async (req, res) => {
  try {
    const doctors = await Doctor.find(); // Retrieve all documents from the 'doctor_db' collection
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch doctors', message: err.message });
  }
});

module.exports = router;
