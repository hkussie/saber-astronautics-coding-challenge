const moment = require('moment');

/**
 * Generates a filename for the JSON data file based on the current date and time.
 * @returns {string} The generated filename in the format 'YYYYMMDDHHmmss-obs.json'.
 */
function generateFileName() {
  const now = moment().format('YYYYMMDDHHmmss');
  return `${now}-obs.json`;
}

/**
 * Generates a filename for the SHA-256 hash file based on the given JSON data filename.
 * @param {string} jsonFileName - The filename of the JSON data file.
 * @returns {string} The generated hash filename in the format 'YYYYMMDDHHmmss-obs.sha256'.
 */
function generateHashFileName(jsonFileName) {
  return jsonFileName.replace('.json', '.sha256');
}

module.exports = { generateFileName, generateHashFileName };