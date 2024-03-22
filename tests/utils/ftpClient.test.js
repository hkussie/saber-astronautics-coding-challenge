const FTPClient = require('../../src/utils/ftpClient');
const ftp = require('ftp'); // Assuming 'ftp' is the library you're using

jest.mock('ftp', () => {
    return jest.fn().mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(true),
      put: jest.fn().mockResolvedValue(true),
      end: jest.fn(), // Mock the disconnection method
    }));
});

describe('FTPClient disconnect functionality', () => {
    let FTPClient;
    let client;
  
    beforeEach(() => {
      jest.clearAllMocks();
      FTPClient = require('../../src/utils/ftpClient');
      client = new FTPClient();
    });

    it('should correctly instantiate the mock FTP client', () => {
        const client = new FTPClient(); // Temporarily log to verify instantiation
        
        expect(client.connect).toBeDefined();
        expect(client.upload).toBeDefined(); 
        expect(client.disconnect).toBeDefined(); 
    });
});