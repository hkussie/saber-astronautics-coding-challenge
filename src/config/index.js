require('dotenv').config(); 

const config = {
  ftpHost: process.env.FTP_HOST || '',
  ftpUser: process.env.FTP_USER || '',
  ftpPassword: process.env.FTP_PASS || '',
  ftpSecurity: process.env.FTP_SECURE || 'false',
};

module.exports = config;