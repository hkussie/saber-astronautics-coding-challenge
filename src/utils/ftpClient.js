const FTP = require('ftp');
const { ftpHost, ftpUser, ftpPassword } = require('../config');

class FtpClient {
  constructor() {
    this.ftp = new FTP();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ftp.on('ready', resolve);
      this.ftp.on('error', reject);

      this.ftp.connect({
        host: ftpHost,
        user: ftpUser,
        password: ftpPassword,
      });
    });
  }

  upload(filePath, destination) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.connect();
        this.ftp.put(filePath, destination, (err) => {
          if (err) {
            reject(err);
            return;
          }
          console.log(`${filePath} uploaded successfully to ${destination}`);
          this.disconnect(); // Ensure disconnection after successful upload
          resolve();
        });
      } catch (error) {
        console.error(`Failed to upload ${filePath}:`, error);
        this.disconnect(); // Attempt to disconnect on error
        reject(error);
      }
    });
  }

  disconnect() {
    this.ftp.end();
    console.log('FTP connection closed');
  }
}

module.exports = FtpClient;