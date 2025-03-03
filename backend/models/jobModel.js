const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Job = sequelize.define('Job', {
  job_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'jobs',
  timestamps: false,
});

module.exports = Job;
