const ftp = require("basic-ftp");
const config = require('../config/index');

/**
 * Class representing an FTP client.
 */

class FtpClient {
    constructor() {
        this.client = new ftp.Client();
        this.client.ftp.verbose = true; // Enable for detailed logging
    }

    /**
     * Connects to an FTP server using environment variables for configuration.
     * @async
     * @throws Will throw an error if the connection fails.
     */
    async connect() {
        try {
            await this.client.access({
                host: config.ftpHost,
                user: config.ftpUser,
                password: config.ftpPassword,
                secure: config.ftpSecurity, // Convert string to boolean
            });
            console.log("Connected to FTP server.");
        } catch (error) {
            console.error("Failed to connect to FTP server:", error);
            throw error; // Rethrow to handle in calling code
        }
    }

    /**
     * Uploads a file to the FTP server.
     * @async
     * @param {string} filePath - The local path of the file to upload.
     * @param {string} remotePath - The remote path where the file will be uploaded.
     * @throws Will throw an error if the file upload fails.
     */
    async upload(filePath, remotePath) {
        try {
            await this.client.uploadFrom(filePath, remotePath);
            console.log(`File uploaded successfully: ${filePath} to ${remotePath}`);
        } catch (error) {
            console.error(`Failed to upload file: ${filePath}`, error);
            throw error; // Rethrow to allow for custom error handling
        }
    }

    /**
     * Disconnects from the FTP server.
     * @async
     */
    async disconnect() {
        this.client.close();
        console.log("Disconnected from FTP server.");
    }
}

module.exports = FtpClient;