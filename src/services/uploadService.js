const fs = require('fs');
const { generateFileName, generateHashFileName } = require('../utils/generateFileName');
const hashData = require('../utils/hashData');
const FtpClient = require('../utils/ftpClient');
const sampleData = require('../data/sampleData');

/**
 * Prepares and uploads data and its hash to the FTP server.
 * @async
 * @returns {Promise<void>}
 */

async function uploadDataAndHash() {
  // Convert the sample data to JSON and generate filenames
  const jsonData = JSON.stringify(sampleData);
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