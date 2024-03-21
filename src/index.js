const uploadDataAndHash = require('./services/uploadService');

// Call the upload service to handle the data preparation and upload process.
uploadDataAndHash().then(() => {
  console.log('Data and hash file upload process completed successfully.');
}).catch((error) => {
  console.error('An error occurred during the upload process:', error);
});