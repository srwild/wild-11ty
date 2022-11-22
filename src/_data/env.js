require('dotenv').config('./.env');

module.exports = {
  environment: process.env.ENVIRONMENT || 'development'
};