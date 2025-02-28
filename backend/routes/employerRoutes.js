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

module.exports = router;
