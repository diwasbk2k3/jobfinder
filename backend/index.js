const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const employerRoutes = require('./routes/employerRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parses incoming JSON requests

// Routes
app.use('/admins', adminRoutes);
app.use('/employers', employerRoutes);
app.use('/applicants', applicantRoutes);
app.use('/contacts', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});