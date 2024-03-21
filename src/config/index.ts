import dotenv from 'dotenv';

dotenv.config();

interface Config {
  ftpHost: string;
  ftpUser: string;
  ftpPassword: string;
}

export const config: Config = {
  ftpHost: process.env.FTP_HOST || '',
  ftpUser: process.env.FTP_USER || '',
  ftpPassword: process.env.FTP_PASSWORD || '',
};