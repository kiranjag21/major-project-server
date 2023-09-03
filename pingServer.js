const http = require('http');

// Replace these with your server's details
const serverHost = process.env.ServerHost;
const serverPort = process.env.PORT || 8082;

// Function to ping your server
const pingServer = () => {
  http.get(`${serverHost}:${serverPort}`, (res) => {
    if (res.statusCode === 200) {
      console.log(`Server pinged successfully at ${new Date()}`);
    } else {
      console.error(`Failed to ping server. Status code: ${res.statusCode}`);
    }
  });
};

module.exports = pingServer;