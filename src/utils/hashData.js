const crypto = require('crypto');

/**
 * Generates a SHA-256 hash of the given data.
 * @param {string} data - The data to hash.
 * @return {string} The SHA-256 hash of the data.
 */

function hashData(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

module.exports = hashData;