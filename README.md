# FTP Server Upload Coding Task

This project leverages Docker, NodeJS and JavaScript to upload json files and their corresponding hashed files to an FTP server locally.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need the following installed:

- [Node.js](https://nodejs.org/) - The runtime server environment
- [Docker](https://www.docker.com/) - Container platform used to run the FTP server


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

## Launching the FTP Server

To launch an instance of a locally running ftp server:

1. Ensure Docker is running on your machine.

2. From the root of your project directory, run:

    ```bash 
    docker-compose up
    ```

## Running An Example: 

To generate an OBJS JSON file in addition to its hash locally, and then upload to an FTP server:

```bash 
npm run upload
```

Ensure environment variables needed to connect to FTP server are defined in your env file. 