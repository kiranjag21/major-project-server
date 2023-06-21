module.exports = {
    HOST: "aws.connect.psdb.cloud",
    USER: "v5ikszt31ok0rlet1hmd",
    PASSWORD: "pscale_pw_D6lLt5BTI33j69lxRky4AgjtgsgBrvOqfhVb63IWDRq",
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