const fs = require('fs');
const { generateFileName, generateHashFileName } = require('../utils/generateFileNames');
const hashData = require('../utils/hashData');
const FtpClient = require('../utils/ftpClient');

/**
 * Prepares and uploads data and its hash to the FTP server.
 * @async
 * @param {Object} inputData - The data to be processed and uploaded.
 * @returns {Promise<void>}
 */
async function uploadDataAndHash(inputData) {
  // Convert the input data to JSON and generate filenames
  const jsonData = JSON.stringify(inputData);
  const jsonFileName = generateFileName();
  const hashFileName = generateHashFileName(jsonFileName);
  
  // Hash the JSON data
  const dataHash = hashData(jsonData);

  // Write the JSON data and its hash to local files
  fs.writeFileSync(jsonFileName, jsonData);
  fs.writeFileSync(hashFileName, dataHash);

  // Initialize the FTP client and upload the files
  const ftpClient = new FtpClient();
  try {
    await ftpClient.connect();
    await ftpClient.upload(jsonFileName, jsonFileName); // Upload the JSON file
    await ftpClient.upload(hashFileName, hashFileName); // Upload the hash file
    console.log('Both files uploaded successfully.');
  } catch (error) {
    console.error('Failed to upload files:', error);
  } finally {
    ftpClient.disconnect();
  }
}

module.exports = uploadDataAndHash;