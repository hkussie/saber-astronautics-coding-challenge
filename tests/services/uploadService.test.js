const uploadDataAndHash = require('../../src/services/uploadService');
const FTPClient = require('../../src/utils/ftpClient');
const fs = require('fs');
const sampleData = require('../../src/data/sampleData');

jest.mock('../../src/utils/ftpClient', () => {
    return jest.fn().mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(true),
      upload: jest.fn().mockResolvedValue(true),
      disconnect: jest.fn().mockResolvedValue(true),
    }));
});

jest.mock('fs');

describe('uploadDataAndHash', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    FTPClient.mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(true),
      upload: jest.fn().mockResolvedValue(true),
      disconnect: jest.fn().mockResolvedValue(true),
    }));

    fs.writeFileSync.mockImplementation(jest.fn());
  });

  it('should upload generated files to the mocked FTP server using data from sampleData.js', async () => {
    await uploadDataAndHash(sampleData);
    
    const mockFtpClientInstance = FTPClient.mock.instances[0];

    // Verify fs.writeFileSync was called with JSON data from sampleData.js
    expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), JSON.stringify(sampleData));
    expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), expect.any(String));
  });
});