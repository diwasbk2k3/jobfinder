const express = require('express');
const router = express.Router();
const Applicant = require('../models/applicantModel');


// Get all applicants
router.get('/', async (req, res) => {
    try {
        const applicants = await Applicant.findAll();
        res.json(applicants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
