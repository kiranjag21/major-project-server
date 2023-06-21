module.exports = {
    HOST: "aws.connect.psdb.cloud",
    USER: "w29ntpye2mfgh78acrgd",
    PASSWORD: "pscale_pw_luAyOKPSV72RQuqwDMIXCkcuTwIPifulPbsmzCHlnat",
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