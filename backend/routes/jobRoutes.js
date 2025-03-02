const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');


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
