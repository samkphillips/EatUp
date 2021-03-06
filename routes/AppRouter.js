const router = require('express').Router()
const UserRouter = require('./UserRouter')
const RestaurantRouter = require('./RestaurantRouter')
const OrderRouter = require('./OrderRouter')
const MenuItemRouter = require('./MenuItemRouter')
router.use('/user', UserRouter)
router.use('/restaurant', RestaurantRouter)
router.use('/order', OrderRouter)
router.use('/menu_items', MenuItemRouter)
module.exports = router
