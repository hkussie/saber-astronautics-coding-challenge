// Import the function to test
const uploadDataAndHash = require('../../src/services/uploadService');

// Mocking fs and FtpClient
jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));
jest.mock('../../src/utils/ftpClient', () => {
  return jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockResolvedValue(true),
    upload: jest.fn().mockResolvedValue(true),
    disconnect: jest.fn(),
  }));
});

describe('uploadDataAndHash', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should upload data and its hash successfully', async () => {
    // Call the function
    await uploadDataAndHash();

    // Assertions to verify behavior
    const fs = require('fs');
    expect(fs.writeFileSync).toHaveBeenCalledTimes(2); // Check if writeFileSync was called twice

    const FtpClient = require('../../src/utils/ftpClient');
    const mockFtpClientInstance = FtpClient.mock.instances[0];
    expect(FtpClient).toHaveBeenCalledTimes(1); // FtpClient instantiated once
    expect(mockFtpClientInstance.connect).toHaveBeenCalledTimes(1); // connect called once
    expect(mockFtpClientInstance.upload).toHaveBeenCalledTimes(2); // upload called twice for both files
    expect(mockFtpClientInstance.disconnect).toHaveBeenCalledTimes(1); // disconnect called once
  });

  it('should handle file writing error', async () => {
    // Mock fs.writeFileSync to throw an error
    const fs = require('fs');
    fs.writeFileSync.mockImplementation(() => {
      throw new Error('Failed to write file');
    });
  
    // Assuming uploadDataAndHash is designed to catch errors and return false or a similar error response
    const result = await uploadDataAndHash();
  
    // Verify that the function handled the error
    expect(result).toBe(false); // Or check for a specific error message/object if applicable
  });

  it('should handle FTP upload failure', async () => {
    // Adjust the mock for FtpClient to simulate an upload failure
    const FtpClient = require('../../src/utils/ftpClient');
    const mockFtpClientInstance = FtpClient.mock.instances[0];
    mockFtpClientInstance.upload.mockRejectedValue(new Error('FTP upload failed'));
  
    // Assuming uploadDataAndHash is designed to catch errors and return false or a similar error response
    const result = await uploadDataAndHash();
  
    // Verify that the function handled the error
    expect(result).toBe(false); // Or check for a specific error message/object if applicable
  });
});