const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');

// Function to generate a random job_id
function generateJobId() {
  const jobId = Math.floor(1000 + Math.random() * 9000);  // Generate a random number between 1000 and 9999
  return `J${jobId}`;  // Prefix with 'J' to create the job_id (e.g., J2345)
}

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
