const axios = require('axios');
// Replace these with your server's details
const serverHost = process.env.ServerHost;
const serverPort = process.env.PORT || 8082;

// Function to ping your server
const pingServer = () => {
    axios.get('https://majorproject-server.onrender.com/') // Replace with your server's URL
    .then((response) => {
      console.log('Ping successful:', response.status);
    })
    .catch((error) => {
      console.error('Ping failed:', error.message);
    });
};

module.exports = pingServer;