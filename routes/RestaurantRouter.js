const router = require('express').Router()
const controller = require('../controllers/RestaurantController')
const middleware = require('../middleware')

router.get('/allrestaurants', controller.GetAllResturants)
router.post('/newrestaurant', controller.CreateRestaurant)
router.get('/search/state/:state', controller.FindRestaurantByState)
router.get('/search/food/:food', controller.FindRestaurantByFood)
router.get('/search/name/:restaurant_name', controller.FindRestaurantByName)
// router.delete('/doit', controller.emptyRestaurantDatabase)
router.get('/search/id/:restaurant_id', controller.FindRestaurantById)
module.exports = router
