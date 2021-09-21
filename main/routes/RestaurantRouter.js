const router = require('express').Router()
const controller = require('../controllers/RestaurantController')
const middleware = require('../middleware')

router.get('/allrestaurants', controller.GetAllResturants)
router.post('/newrestaurant', controller.CreateRestaurant)
router.get('/search/state/:state', controller.FindRestaurantByState)
router.get('/search/food/:food', controller.FindRestaurantByFood)
router.get('/search/name/:restaurant_name', controller.FindRestaurantByName)
module.exports = router
