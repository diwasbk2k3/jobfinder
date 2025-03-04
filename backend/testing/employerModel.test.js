const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mock the Contact model
jest.mock('../models/contactModel', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  
  const ContactMock = dbMock.define('Contact', {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '9876543210',
    message: 'This is a test message.',
  });

  return { Contact: ContactMock };
});

describe('Contact Model', () => {
  it('should create a contact successfully', async () => {
    const { Contact } = require('../models/contactModel');
    const contact = await Contact.create({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '9876543210',
      message: 'This is a test message.',
    });
    expect(contact.name).toBe('Jane Doe');
    expect(contact.email).toBe('janedoe@example.com');
    expect(contact.phone).toBe('9876543210');
    expect(contact.message).toBe('This is a test message.');
  });

  it('should find a contact by email', async () => {
    const { Contact } = require('../models/contactModel');
    const contact = await Contact.findOne({ where: { email: 'janedoe@example.com' } });
    expect(contact).toHaveProperty('email', 'janedoe@example.com');
    expect(contact).toHaveProperty('name', 'Jane Doe');
  });

  it('should find contacts by name', async () => {
    const { Contact } = require('../models/contactModel');
    const contacts = await Contact.findAll({ where: { name: 'Jane Doe' } });
    expect(contacts.length).toBeGreaterThan(0);
    expect(contacts[0]).toHaveProperty('name', 'Jane Doe');
  });
});
