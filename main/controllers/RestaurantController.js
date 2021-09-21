const { Restaurant } = require('../models')

const GetAllResturants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllResturants
}
