var express = require('express')
var router = express.Router()
var checkAuth = require('../middleware/authentication')

var Pages = require('../controllers/pages')
var Auth = require('../controllers/auth')

router.get(['/', '/home'], checkAuth.isAuthenticated, Pages.index)
router.get('/grain', checkAuth.isAuthenticated, Pages.grain)
router.get('/grain_add', checkAuth.isAuthenticated, Pages.addGrain)
router.get('/contracts', checkAuth.isAuthenticated, Pages.contracts)
router.get('/buyers', checkAuth.isAuthenticated, Pages.buyers)
router.get('/sellers', checkAuth.isAuthenticated, Pages.sellers)
router.get('/warehouses', checkAuth.isAuthenticated, Pages.warehouses)
router.get('/blog', checkAuth.isAuthenticated, Pages.blog)
router.get('/account', checkAuth.isAuthenticated, Pages.account)
router.get('/profile', checkAuth.isAuthenticated, Pages.profile)
router.get('/bank', checkAuth.isAuthenticated, Pages.bank)
router.get('/mobileMoney', checkAuth.isAuthenticated, Pages.mobileMoney)

router.get('/login', Auth.login)
router.get('/signup', checkAuth.isAuthenticated, Auth.signup)
router.get('/forgotPassword', checkAuth.isAuthenticated, Auth.forgotPassword)
router.get('/logout', Auth.logout)

router.post('/login', Auth.loginPost)
router.post('/signup', Auth.signupPost)

module.exports = router
