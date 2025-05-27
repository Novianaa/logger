const db = require('../helpers/mysql')

module.exports = {

  postLogger: (setData) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`INSERT INTO log SET ?`, setData, (err, result) => {
        if (err) {
          reject(new Error(`${err.message}`))
        }
        resolve({  setData })
      })
    })
  },
}