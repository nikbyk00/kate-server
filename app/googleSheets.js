const { GoogleSpreadsheet } = require('google-spreadsheet');
const { EMAIL, USER_PRIVATE_KEY, USER_ID} = require ('./env.config')

const doc = new GoogleSpreadsheet(USER_ID);

async function start() {
try {
    await doc.useServiceAccountAuth({client_email: EMAIL, private_key: USER_PRIVATE_KEY});
  } catch (e) {
    console.error(e)
  }
}

module.exports = { doc, start }
