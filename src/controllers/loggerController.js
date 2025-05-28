const Logger = require('../models/loggerModel')
const helperWrapper = require('../helpers/wrapper')

module.exports = {
  postLogger: async (req, res) => {
    try {
      const { user_id, name, data  } = req.body
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      let newData = {user_id,name,data, ip: ip}
      const result = await Logger.postLogger(newData)
      return helperWrapper.response(res, 201, 'Success save', result)
    } catch (err) {
      return helperWrapper.response(
        res, 400, `Bad request ${err.message}`, []
      )
    }
  },
}