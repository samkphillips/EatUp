const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/login', controller.LogUserIn)
router.post('/register', controller.CreateNewUser)
router.put(
  '/changepassword',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ChangePassword
)
router.delete(
  '/destroyuser',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserAccount
)
module.exports = router
