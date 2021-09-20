const Router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/login', controller.LogUserIn)
router.post('/register', controller.CreateNewUser)

module.exports = Router
