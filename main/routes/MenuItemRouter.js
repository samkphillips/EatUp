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
router.get(
  '/singleitem/:menu_item_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.MenuItemById
)
module.exports = router
