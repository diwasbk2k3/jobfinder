const request = require('supertest');
const express = require('express');
const router = require('../routes/statsRoutes'); // Assuming the route file is statsRoutes.js
const Employer = require('../models/employerModel');
const Applicant = require('../models/applicantModel');

// Mock the Sequelize methods
jest.mock('../models/employerModel');
jest.mock('../models/applicantModel');

describe('Admin Stats Routes', () => {
  const app = express();
  app.use(express.json());
  app.use('/stats', router); // Assuming your route is '/stats'

  // Test case for getting admin statistics
  it('should return total employers and total applicants', async () => {
    // Mock the count method for both Employer and Applicant models
    Employer.count.mockResolvedValue(10); // Mocking total employers as 10
    Applicant.count.mockResolvedValue(25); // Mocking total applicants as 25

    const response = await request(app).get('/stats/admin-stats');
    expect(response.status).toBe(200);
    expect(response.body.totalEmployers).toBe(10);
    expect(response.body.totalApplicants).toBe(25);
  });

  // Test case for handling errors when fetching stats
  it('should return an error when fetching stats fails', async () => {
    // Mocking the count method to throw an error
    Employer.count.mockRejectedValue(new Error('Database error'));
    Applicant.count.mockRejectedValue(new Error('Database error'));

    const response = await request(app).get('/stats/admin-stats');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Failed to fetch statistics');
  });

  afterAll(() => {
    jest.clearAllMocks(); // Clear mocks after tests
  });
});
