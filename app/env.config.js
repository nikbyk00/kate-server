const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') }) 

module.exports = {
    DB_LOG: true,
    DB_TYPE: 'mysql',
    DB_HOSTNAME: '',
    DB_USERNAME: '',
    DB_PASSWORD: '',
    DB_DATABASE: '',
    DB_PORT: 3306
  }
