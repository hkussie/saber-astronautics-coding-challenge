const FTPClient = require('../../src/utils/ftpClient');
const ftp = require('ftp'); // Assuming 'ftp' is the library you're using

jest.mock('ftp', () => {
    return jest.fn().mockImplementation(() => ({
      connect: jest.fn((config, callback) => {
        // Simulate an immediate successful connection
        if (typeof callback === 'function') {
          callback();
        }
      }),
      on: jest.fn((event, listener) => {
        // Immediately simulate the 'ready' event
        if (event === 'ready' && typeof listener === 'function') {
          listener();
        }
      }),
      put: jest.fn((localPath, remotePath, callback) => {
        // Simulate a successful file upload
        if (typeof callback === 'function') {
          callback(null);
        }
      }),
      end: jest.fn(),
    }));
});

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
});