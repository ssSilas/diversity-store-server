module.exports = {
  apps: [
    {
      name: 'diversity-store-server',
      script: './dist/src/main.js',
      env_dev: {
        NODE_ENV: 'dev',
        PORT_APLICATION: 5050,
        //#TOKEN
        SECRET_KEY: '0EuKV<UZ8VN#5sK@2y!U&XEygr',
        DURATION_TOKEN: '24:00',
        PASS_SALT: 'this_auth@06',

        //#DATABASE
        DATA_BASE_HOST: 'localhost',
        DATA_BASE_READ: 'localhost',
        DATA_BASE_USER: 'root',
        DATA_BASE_PASSWORD: 'root',
        PORT: 5010,
        DATA_BASE_DIALECT: 'mysql'
      },
    },
  ],
};
