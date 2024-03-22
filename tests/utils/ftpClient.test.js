const FTPClient = require('../../src/utils/ftpClient');
const ftp = require('ftp'); // Assuming 'ftp' is the library you're using

describe('FTPClient', () => {
    let FTPClient;
    let client;
  
    beforeEach(() => {
      // Clear all instances and calls to constructor and all methods:
      jest.clearAllMocks();
  
      // Dynamically require the FTPClient after the mock is defined
      FTPClient = require('../../src/utils/ftpClient');
      client = new FTPClient();
    });

    it('should correctly instantiate the mock FTP client', () => {
        const client = new FTPClient(); // Temporarily log to verify instantiation
        expect(client.connect).toBeDefined();
    });

    // Create test that would test that connection can disconnect
});