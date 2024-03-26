const FtpClient = require('../../src/utils/ftpClient');
jest.mock('basic-ftp', () => {
    return {
        Client: jest.fn().mockImplementation(() => {
            return {
                access: jest.fn(),
                uploadFrom: jest.fn(),
                close: jest.fn(),
                ftp: { verbose: false }
            };
        })
    };
});

describe('FtpClient', () => {
    let ftpClient;
    beforeEach(() => {
        ftpClient = new FtpClient();
    });

    describe('connect', () => {
        it('should connect successfully', async () => {
            await ftpClient.connect();
            expect(ftpClient.client.access).toHaveBeenCalled();
        });

        it('should throw an error if connection fails', async () => {
            ftpClient.client.access.mockRejectedValue(new Error('Connection failed'));
            await expect(ftpClient.connect()).rejects.toThrow('Connection failed');
        });
    });

    describe('upload', () => {
        it('should upload file successfully', async () => {
            const filePath = 'local/path/file.txt';
            const remotePath = 'remote/path/file.txt';
            await ftpClient.upload(filePath, remotePath);
            expect(ftpClient.client.uploadFrom).toHaveBeenCalledWith(filePath, remotePath);
        });

        it('should throw an error if upload fails', async () => {
            ftpClient.client.uploadFrom.mockRejectedValue(new Error('Upload failed'));
            const filePath = 'local/path/file.txt';
            const remotePath = 'remote/path/file.txt';
            await expect(ftpClient.upload(filePath, remotePath)).rejects.toThrow('Upload failed');
        });
    });

    describe('disconnect', () => {
        it('should disconnect successfully', async () => {
            await ftpClient.disconnect();
            expect(ftpClient.client.close).toHaveBeenCalled();
        });
    });
});