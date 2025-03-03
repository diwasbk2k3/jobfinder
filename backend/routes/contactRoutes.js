const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    // Validate the input fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    // Create a new contact
    const newContact = await Contact.create({ name, email, phone, message });
    res.status(201).json({
      message: 'Message sent successfully',
      contact: newContact,
    });
  } catch (err) {
    console.error('Error creating contact:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
