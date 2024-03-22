const FTPClient = require('../../src/utils/ftpClient');
const FTP = require('ftp');

jest.mock('FTP');

describe('FtpClient Connection', () => {
  it('should disconnect successfully', async () => {
    FTP.prototype.end = jest.fn();

    const client = new FTPClient();
    client.disconnect();

    expect(FTP.prototype.end).toHaveBeenCalled();
  });
});