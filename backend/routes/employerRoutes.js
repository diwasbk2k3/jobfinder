const express = require('express');
const router = express.Router();
const Employer = require('../models/employerModel');

// Generate an employer ID
function generateEmployerId() {
  const employerId = Math.floor(1000 + Math.random() * 9000);
  return `E${employerId}`;
}

// Fetch all employers
router.get('/', async (req, res) => {
  try {
    const employers = await Employer.findAll();
    res.json(employers);
  } catch (err) {
    console.error('Error fetching employers:', err);
    res.status(500).json({ error: 'Failed to fetch employers' });
  }
});

// Signup route for employer registration
router.post('/signup', async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    // Check if email already exists
    const existingEmployer = await Employer.findOne({ where: { email } });
    if (existingEmployer) {
      return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
    }
    const employer_id = generateEmployerId();
    const newEmployer = await Employer.create({ employer_id, email, phone, password });
    res.status(201).json({ message: 'Employer created successfully', employer: newEmployer });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
