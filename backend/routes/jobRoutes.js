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

// POST Route: Create a new job
router.post('/create-jobs', async (req, res) => {
  try {
    const { job_title,employer_id, owner, job_type, location, salary, skills, description, deadline, status } = req.body;
    if (!job_title || !employer_id || !owner || !job_type || !location || !salary || !skills || !description || !deadline || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const job_id = generateJobId();
    const newJob = await Job.create({
      job_id,
      job_title,
      employer_id,
      owner,
      job_type,
      location,
      salary,
      skills,
      description,
      deadline,
      status,
    });
    res.status(201).json({
      message: 'Job created successfully',
      job: newJob,
    });
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
