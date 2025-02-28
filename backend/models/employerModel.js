const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Employer = sequelize.define('Employer', {
  employer_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'employers',
  timestamps: false,
});

module.exports = Employer;
