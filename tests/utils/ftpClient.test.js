const FTPClient = require('../../src/utils/ftpClient');
const FTP = require('ftp');

jest.mock('FTP');

describe('FtpClient Connection', () => {

  it('should connect successfully', async () => {
    FTP.prototype.connect = jest.fn(); // Mock the connect method

    const client = new FTPClient();
    client.connect();

    expect(FTP.prototype.connect).toHaveBeenCalled(); // Verify connect was called
  });

  it('should disconnect successfully', async () => {
    FTP.prototype.end = jest.fn();

    const client = new FTPClient();
    client.disconnect();

    expect(FTP.prototype.end).toHaveBeenCalled();
  });
});