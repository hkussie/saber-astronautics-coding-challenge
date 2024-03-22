const uploadDataAndHash = require('./services/uploadService');
const sampleData = require('./data/sampleData');

uploadDataAndHash(sampleData)
  .then(() => console.log('Data upload complete.'))
  .catch(error => console.error('Data upload failed:', error));