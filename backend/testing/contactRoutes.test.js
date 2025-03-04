const request = require('supertest');
const express = require('express');
const Contact = require('../models/contactModel');
const router = require('../routes/contactRoutes');
const db = require('../database/db');

// Mock Sequelize methods and Contact model
jest.mock('../models/contactModel');

describe('Contact Routes', () => {
  const app = express();
  app.use(express.json());
  app.use('/contact', router);

  // Mock Contact model methods
  const mockContactData = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    message: 'This is a test message.',
  };

  // Test case for getting all contacts
  it('should return a list of contacts', async () => {
    // Mocking the Sequelize findAll method
    Contact.findAll.mockResolvedValue([mockContactData]);

    const response = await request(app).get('/contact');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockContactData]);
  });

  // Test case for creating a new contact (POST request)
  it('should create a new contact successfully', async () => {
    // Mocking the Sequelize create method to simulate a successful contact creation
    Contact.create.mockResolvedValue(mockContactData);

    const contactData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'This is a test message.',
    };

    const response = await request(app)
      .post('/contact')
      .send(contactData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Message sent successfully');
    expect(response.body.contact).toEqual(mockContactData);
  });

  // Test case for creating a new contact with missing fields (Bad request)
  it('should return 400 if fields are missing', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
    };

    const response = await request(app)
      .post('/contact')
      .send(contactData);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All fields are required');
  });

  // Test case for handling errors when creating a new contact
  it('should handle errors when creating contact', async () => {
    // Mocking the create method to throw an error
    Contact.create.mockRejectedValue(new Error('Database error'));

    const contactData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'This is a test message.',
    };

    const response = await request(app)
      .post('/contact')
      .send(contactData);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal server error');
  });

  // Test case for handling errors when fetching contacts
  it('should handle errors when fetching contacts', async () => {
    // Mocking the findAll method to throw an error
    Contact.findAll.mockRejectedValue(new Error('Database error'));

    const response = await request(app).get('/contact');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Database error');
  });

  afterAll(async () => {
    console.log('All tests completed. Closing database connection...');
    await db.close();
    jest.useRealTimers();
  });
});
