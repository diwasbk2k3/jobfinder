const express = require('express');
const Employer = require('../models/employerModel');
const Applicant = require('../models/applicantModel');

const router = express.Router();

// Fetch total employers and total applicants
router.get('/admin-stats', async (req, res) => {
  try {
    // Get total number of employers
    const totalEmployers = await Employer.count();
    // Get total number of applicants
    const totalApplicants = await Applicant.count();

    res.json({
      totalEmployers,
      totalApplicants,
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;
