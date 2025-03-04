const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mock the Applicant model
jest.mock('../models/applicantModel', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  
  const ApplicantMock = dbMock.define('Applicant', {
    applicant_id: '1',
    job_id: 'J123',
    employer_id: 'E456',
    job_title: 'Software Developer',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
    portfolio_link: 'https://portfolio.com',
    additional_info: 'Experienced developer',
  });

  return { Applicant: ApplicantMock };
});

describe('Applicant Model', () => {
  it('should create an applicant successfully', async () => {
    const { Applicant } = require('../models/applicantModel');
    const applicant = await Applicant.create({
      applicant_id: '1',
      job_id: 'J123',
      employer_id: 'E456',
      job_title: 'Software Developer',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      portfolio_link: 'https://portfolio.com',
      additional_info: 'Experienced developer',
    });
    expect(applicant.name).toBe('John Doe');
    expect(applicant.email).toBe('johndoe@example.com');
    expect(applicant.job_title).toBe('Software Developer');
  });

  it('should find an applicant by email', async () => {
    const { Applicant } = require('../models/applicantModel');
    const applicant = await Applicant.findOne({ where: { email: 'johndoe@example.com' } });
    expect(applicant).toHaveProperty('email', 'johndoe@example.com');
    expect(applicant).toHaveProperty('name', 'John Doe');
  });

  it('should find applicants by job title', async () => {
    const { Applicant } = require('../models/applicantModel');
    const applicants = await Applicant.findAll({ where: { job_title: 'Software Developer' } });
    expect(applicants.length).toBeGreaterThan(0);
    expect(applicants[0]).toHaveProperty('job_title', 'Software Developer');
  });
});
