const express = require('express');
const cors = require('cors');
const employerRoutes = require('./routes/employerRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parses incoming JSON requests


app.use('/employers', employerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});