const { Order } = require('../models')

const CreateOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    res.send(newOrder)
  } catch (error) {
    throw error
  }
}

const FindOrdersByRestaurant = async (req, res) => {
  try {
    const ordersByRestaurant = await Order.findAll({
      where: { restaurantId: req.params.restaurant_id }
    })
    res.send(ordersByRestaurant)
  } catch (error) {
    throw error
  }
}

const FindOrdersByUser = async (req, res) => {
  try {
    const ordersByUser = await Order.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(ordersByUser)
  } catch (error) {
    throw error
  }
}

const DeleteOrder = async (req, res) => {
  try {
    await Order.destroy({ where: { id: req.params.order_id } })
    res.send(`Order deleted with id: ${req.params.order_id}`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateOrder,
  FindOrdersByRestaurant,
  FindOrdersByUser,
  DeleteOrder
}
