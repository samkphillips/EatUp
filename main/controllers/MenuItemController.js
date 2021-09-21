const { MenuItems } = require('../models')

const CreateMenuItem = async (req, res) => {
  try {
    const newMenuItem = await MenuItems.create(req.body)
    res.send(newMenuItem)
  } catch (error) {
    throw error
  }
}

const FindMenuItemsByRestaurant = async (req, res) => {
  try {
    const menuItemsByRestaurant = await MenuItems.findAll({
      where: { restaurantId: req.params.restaurant_id }
    })
    res.send(menuItemsByRestaurant)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateMenuItem,
  FindMenuItemsByRestaurant
}
