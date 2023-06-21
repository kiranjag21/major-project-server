module.exports = {
    HOST: "aws.connect.psdb.cloud",
    USER: "k000yt8zgg3bzh183reu",
    PASSWORD: "pscale_pw_jvB7SnO7ulrTHnS9On4pBdND9Favada9xf8Pt63fDZE",
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