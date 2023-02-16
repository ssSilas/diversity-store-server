export default () => ({
  aplicationPort: process.env.PORT_APLICATION,
  secretKey: process.env.SECRET_KEY,
  durationToken: process.env.DURATION_TOKEN,
  salt: process.env.PASS_SALT,
  dataBase: {
    host: process.env.DATA_BASE_HOST,
    dbName: process.env.DATA_BASE,
    user: process.env.DATA_BASE_USER,
    password: process.env.DATA_BASE_PASSWORD,
    port: process.env.PORT
  }
})