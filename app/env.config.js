const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') }) 

module.exports = {
    DB_LOG: true,
    DB_TYPE: 'mysql',
    DB_HOSTNAME: '91.228.153.119',
    DB_USERNAME: 'admin_Kate',
    DB_PASSWORD: 'Algebra2003',
    DB_DATABASE: 'admin_Kate_Db',
    DB_PORT: 3306
  }