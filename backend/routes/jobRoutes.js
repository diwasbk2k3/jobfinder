const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');

// Function to generate a random job_id
function generateJobId() {
  const jobId = Math.floor(1000 + Math.random() * 9000);
  return `J${jobId}`; 
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

// PUT Route: Update an existing job by job_id
router.put('/:job_id', async (req, res) => {
  try {
    const { job_id } = req.params;
    const { job_title,employer_id, owner, job_type, location, salary, skills, description, deadline, status } = req.body;
    // Check if job exists
    const job = await Job.findOne({ where: { job_id } });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    // Update job details
    job.job_title = job_title || job.job_title;
    job.owner = owner || job.owner;
    job.job_type = job_type || job.job_type;
    job.location = location || job.location;
    job.salary = salary || job.salary;
    job.skills = skills || job.skills;
    job.description = description || job.description;
    job.deadline = deadline || job.deadline;
    job.status = status || job.status;
    // Save updated job
    await job.save();
    res.status(200).json({
      message: 'Job updated successfully',
      job,
    });
  } catch (err) {
    console.error('Error updating job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE Route: Delete a job by job_id
router.delete('/:job_id', async (req, res) => {
  try {
    const { job_id } = req.params;
    // Check if job exists
    const job = await Job.findOne({ where: { job_id } });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    // Delete the job
    await job.destroy();
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
