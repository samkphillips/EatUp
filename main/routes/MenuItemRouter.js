const router = require('express').Router()
const controller = require('../controllers/MenuItemController.js')
const middleware = require('../middleware')

router.post('/newMenuItem', controller.CreateMenuItem)
router.get(
  '/menu/:restaurant_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindMenuItemsByRestaurant
)
module.exports = router
