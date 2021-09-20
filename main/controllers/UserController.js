const { User } = require('../models')
const middleware = require('../middleware')

const CreateNewUser = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
  } catch (error) {
    throw error
  }
}
