module.exports = {
    HOST: "aws.connect.psdb.cloud",
    USER: "czk9qxfl6mgqymg8clkf",
    PASSWORD: "pscale_pw_H6WBexO48GpHFhYrbaSF6Ho2ILCwrSwqJzCYk2bw6wq",
    DB: "food_delivery",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  };