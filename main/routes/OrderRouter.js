const router = require('express').Router()
const controller = require('../controllers/OrderController.js')
const middleware = require('../middleware')

router.post(
  '/neworder',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrder
)
router.get(
  '/restaurantorders/:restaurant_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindOrdersByRestaurant
)
router.get(
  '/userorders/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindOrdersByUser
)
router.delete(
  '/deleteorder/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrder
)
module.exports = router
