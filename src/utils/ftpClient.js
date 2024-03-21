const FTP = require('ftp');
const { ftpHost, ftpUser, ftpPassword } = require('../config');

/**
 * Class representing an FTP client.
 */
class FtpClient {
  /**
   * Creates an instance of the FTP client.
   */
  constructor() {
    this.ftp = new FTP();
  }

  /**
   * Connects to the FTP server using the configuration from the environment variables.
   * @returns {Promise<void>} A promise that resolves when the connection is successfully established.
   */
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

  /**
   * Uploads a file to the FTP server.
   * @param {string} filePath - The local path of the file to upload.
   * @param {string} destination - The destination path on the FTP server.
   * @returns {Promise<void>} A promise that resolves when the file is successfully uploaded.
   */
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

  /**
   * Closes the connection to the FTP server.
   */
  disconnect() {
    this.ftp.end();
    console.log('FTP connection closed');
  }
}

module.exports = FtpClient;