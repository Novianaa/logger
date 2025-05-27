const Logger = require('../models/loggerModel')
const helperWrapper = require('../helpers/wrapper')

module.exports = {
  postLogger: async (req, res) => {
    try {
      const { user_id, name, data  } = req.body
     
      let setData = {
        user_id,
        name,
        data
      }
      const result = await Logger.postLogger(setData)
      return helperWrapper.response(res, 201, 'Success save', result)
    } catch (err) {
      return helperWrapper.response(
        res, 400, `Bad request ${err.message}`, []
      )
    }
  },
}