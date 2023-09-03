const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var pusherRouter = require('./routes/pusher/pusher');
var pusherCustomerRouter = require('./routes/pusher/pusher-customer');
var orderRouter = require('./routes/pusher/orders');
//var profileRouter = require('./routes/pusher/deliveryProfile');
const app = express();

var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001", "https://major-project-v3.vercel.app", "https://majorproject-delivery-app-v3.vercel.app" ]
};
var users = [];
var currentCustomer;
app.set('users', users);
app.set('currentCustomer', currentCustomer);
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1154881",
  key: "153cf7f4abf2fc074dfb",
  secret: "f73d54486ba337fa02ec",
  cluster: "ap2",
  useTLS: true
});

app.set('pusher', pusher);

app.use('/pusher', pusherRouter);
app.use('/pusher/customer', pusherCustomerRouter);
app.use('/orders', orderRouter);
//.use('/deliveryExecutive', profileRouter);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

const db = require("./models");
const pingServer = require("./pingServer");
db.sequelize.sync();
require("./routes/user.routes")(app);
require("./routes/delivery.route")(app);
require("./routes/restaurant.route")(app);

// set port, listen for requests
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

    // Set the time interval (in milliseconds) for pinging the server (e.g., every 5 minutes)
    const pingInterval = 900000; // 15 minutes

    // Start pinging the server at the specified interval
    setInterval(pingServer, pingInterval);

});

module.exports = app;