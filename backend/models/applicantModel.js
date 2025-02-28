const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Applicant = sequelize.define('Applicant', {
  applicant_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  job_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolio_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  additional_info: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'applicants',
  timestamps: false,
});

module.exports = Applicant;
