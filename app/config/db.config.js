module.exports = {
    HOST: "aws.connect.psdb.cloud",
    USER: "q44osqmkz4bjhdpcdv2j",
    PASSWORD: "pscale_pw_ojDo60fuh3rVgMP1P4bQEW3xDZwZEDZ8bz5DkFbGZc1",
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