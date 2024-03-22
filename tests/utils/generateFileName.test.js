const { generateFileName, generateHashFileName } = require('../../src/utils/generateFileNames');
const moment = require('moment');

describe('generateFileName', () => {
  it('should generate a filename with the current date and time', () => {
    const regexPattern = /^\d{14}-obs\.json$/;
    const generatedName = generateFileName();
    expect(generatedName).toMatch(regexPattern);

    const currentTime = moment().format('YYYYMMDDHHmmss');
    const fileNameTime = generatedName.split('-')[0];
    expect(fileNameTime).toBe(currentTime);
  });
});

describe('generateHashFileName', () => {
  it('should replace .json extension with .sha256', () => {
    const jsonFileName = '20230401T123456-obs.json';
    const expectedHashFileName = '20230401T123456-obs.sha256';
    const generatedHashFileName = generateHashFileName(jsonFileName);
    expect(generatedHashFileName).toBe(expectedHashFileName);
  });

  it('should handle filenames without .json extension gracefully', () => {
    const jsonFileName = '20230401T123456-obs';
    const expectedHashFileName = '20230401T123456-obs.sha256';
    const generatedHashFileName = generateHashFileName(jsonFileName);
    expect(generatedHashFileName).toBe(expectedHashFileName);
  });
});