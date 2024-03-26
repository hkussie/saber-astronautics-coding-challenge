# FTP Server Upload Coding Task

This project leverages NodeJS, JavaScript and FTP protocol to upload json files and their corresponding hashed files to a remote FTP server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need the following installed:

- [Node.js](https://nodejs.org/) - The runtime server environment
- [FTP GUI Client](https://filezilla-project.org/download.php?type=client) - GUI to verify that files are being successfully uploaded to FTP server. 

### Installing

Steps to install locally: 

1. Clone the repository:

    ```bash 
    git clone https://github.com/hkussie saber-astronautics-coding-challenge
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Testing Against a Live FTP Server

1. Create a temporary ftp server [here](https://sftpcloud.io/tools/free-ftp-server)

2. Copy the following variables and paste the into your env file:

    ```bash 
    Host
    Username
    Password
    ```
3. Ensure that ``FTP_SECURE=false`` in your ``env`` file. 
4. Install FTP GUI Client to verify that files are being uploaded to server. Example of free client [here](https://filezilla-project.org/download.php?type=client)
5. Run the following script: 
    ```bash
    npm run upload
    ```
6. Refresh GUI Client to validate that files are successfully uploaded.