const dotenv = require('dotenv');

dotenv.config();

const config = {
  ftpHost: process.env.FTP_HOST || '',
  ftpUser: process.env.FTP_USER || '',
  ftpPassword: process.env.FTP_PASSWORD || '',
};

module.exports = { config };