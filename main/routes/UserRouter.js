const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/login', controller.LogUserIn)
router.post('/register', controller.CreateNewUser)
router.put(
  '/changepassword',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ChangePassword
)

module.exports = router
