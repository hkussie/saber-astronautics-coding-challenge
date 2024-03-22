# Saber Code Task

This project leverages Docker and NodeJS to upload files to an FTP server locally.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/) - The runtime server environment
- [Docker](https://www.docker.com/) - Container platform used to run the FTP server

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:

    ```bash 
    git clone https://github.com/hkussie saber-astronautics-coding-challenge
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Launching the FTP Server

To launch the FTP server using Docker Compose:

1. Ensure Docker is running on your machine.

2. From the root of your project directory, run:

    ```bash 
    npm run start-ftp-and-upload
    ```
This script will ensure the FTP server is running and then execute the `index.js` file to upload files to the server.

## Stopping the FTP Server

To stop and remove the FTP server container:

```bash
docker-compose down
```