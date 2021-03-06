const { Restaurant } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllResturants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}

const CreateRestaurant = async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body)
    res.send(newRestaurant)
  } catch (error) {
    throw error
  }
}

const FindRestaurantByState = async (req, res) => {
  const restaurantsByState = await Restaurant.findAll({
    where: { address: { [Op.like]: `%${req.params.state}%` } }
  })
  res.send(restaurantsByState)
}

const FindRestaurantByFood = async (req, res) => {
  const restaurantsByFood = await Restaurant.findAll({
    where: { foodTags: { [Op.like]: `%${req.params.food}%` } }
  })
  res.send(restaurantsByFood)
}

const FindRestaurantByName = async (req, res) => {
  const restaurantByName = await Restaurant.findOne({
    where: { name: req.params.restaurant_name }
  })
  res.send(restaurantByName)
}

const FindRestaurantById = async (req, res) => {
  const restaurantById = await Restaurant.findByPk(req.params.restaurant_id)
  res.send(restaurantById)
}

// const emptyRestaurantDatabase = async (req, res) => {
//   await Restaurant.destroy({ where: { id: { [Op.gt]: 0 } } })
//   res.send('It is done. ')
// }

module.exports = {
  GetAllResturants,
  CreateRestaurant,
  FindRestaurantByState,
  FindRestaurantByFood,
  FindRestaurantByName /*,
  emptyRestaurantDatabase*/,
  FindRestaurantById
}
