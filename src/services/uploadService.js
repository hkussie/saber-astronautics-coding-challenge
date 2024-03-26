const fs = require('fs');
const { generateFileName, generateHashFileName } = require('../utils/generateFileNames');
const hashData = require('../utils/hashData');
const FtpClient = require('../utils/ftpClient');

/**
 * Prepares and uploads data and its hash to the FTP server.
 * @async
 * @param {Object} inputData - The data to be processed and uploaded.
 * @returns {Promise<void>} A promise that resolves when the upload and hash process is complete.
 * @throws Will throw an error if the process fails at any point.
 */
async function uploadDataAndHash(inputData) {
  const ftpClient = new FtpClient();
  const jsonData = JSON.stringify(inputData);
  const jsonFileName = generateFileName(); 
  const hashFileName = generateHashFileName(jsonFileName);

  try {
      // Connect to the FTP server
      await ftpClient.connect();

      // Write JSON data to a file
      fs.writeFileSync(jsonFileName, jsonData);

      // Generate hash of JSON data using the hashData utility
      const hash = hashData(jsonData);
      fs.writeFileSync(hashFileName, hash);

      // Upload the JSON file
      await ftpClient.upload(jsonFileName, jsonFileName);
      console.log(`JSON file uploaded successfully: ${jsonFileName}`);

      // Upload the hash file
      await ftpClient.upload(hashFileName, hashFileName);
      console.log(`Hash file uploaded successfully: ${hashFileName}`);
  } catch (error) {
      console.error("An error occurred during the upload and hash process:", error);
  } finally {
      // Disconnect from the FTP server
      await ftpClient.disconnect();
  }
}

module.exports = uploadDataAndHash;