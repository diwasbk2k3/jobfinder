const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mock the Job model
jest.mock('../models/jobModel', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  
  const JobMock = dbMock.define('Job', {
    job_id: 'J123',
    job_title: 'Software Engineer',
    employer_id: 'E456',
    owner: 'Company A',
    job_type: 'Full-time',
    location: 'Remote',
    salary: 60000,
    skills: 'JavaScript, Node.js, SQL',
    description: 'Develop and maintain web applications.',
    deadline: new Date('2025-12-31'),
    status: 'Open',
  });

  return { Job: JobMock };
});

describe('Job Model', () => {
  it('should create a job successfully', async () => {
    const { Job } = require('../models/jobModel');
    const job = await Job.create({
      job_id: 'J123',
      job_title: 'Software Engineer',
      employer_id: 'E456',
      owner: 'Company A',
      job_type: 'Full-time',
      location: 'Remote',
      salary: 60000,
      skills: 'JavaScript, Node.js, SQL',
      description: 'Develop and maintain web applications.',
      deadline: new Date('2025-12-31'),
      status: 'Open',
    });
    expect(job.job_title).toBe('Software Engineer');
    expect(job.location).toBe('Remote');
    expect(job.salary).toBe(60000);
    expect(job.status).toBe('Open');
  });

  it('should find a job by job_id', async () => {
    const { Job } = require('../models/jobModel');
    const job = await Job.findOne({ where: { job_id: 'J123' } });
    expect(job).toHaveProperty('job_id', 'J123');
    expect(job).toHaveProperty('job_title', 'Software Engineer');
  });

  it('should find jobs by employer_id', async () => {
    const { Job } = require('../models/jobModel');
    const jobs = await Job.findAll({ where: { employer_id: 'E456' } });
    expect(jobs.length).toBeGreaterThan(0);
    expect(jobs[0]).toHaveProperty('employer_id', 'E456');
  });
});
