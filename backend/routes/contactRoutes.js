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


module.exports = router;
