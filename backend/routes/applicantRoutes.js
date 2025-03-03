const express = require('express');
const router = express.Router();
const Applicant = require('../models/applicantModel');

// Generate Applicant ID
function generateApplicantId() {
    const applicantId = Math.floor(1000 + Math.random() * 9000);
    return `A${applicantId}`;
}

// Get all applicants
router.get('/', async (req, res) => {
    try {
        const applicants = await Applicant.findAll();
        res.json(applicants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    console.log("Received request body:", req.body);
    try {
        const { job_id, employer_id, job_title, name, email, phone, portfolio_link, additional_info } = req.body;
        // Fix: Check for 'phone' instead of 'contact'
        if (!job_id || !job_title || !name || !email || !phone) {
            return res.status(400).json({ error: 'Required fields are missing' });
        }
        // Generate applicant ID
        const applicant_id = generateApplicantId();
        // Insert into the database
        const newApplicant = await Applicant.create({
            applicant_id,
            job_id,
            employer_id,
            job_title,
            name,
            email,
            phone,
            portfolio_link,
            additional_info,
        });

        res.status(201).json({
            message: 'Application submitted successfully',
            data: newApplicant,  // Return the newly created applicant data
        });

    } catch (err) {
        console.error('Error applying:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
