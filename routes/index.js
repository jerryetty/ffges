var express = require('express')
var router = express.Router()

var Pages = require('../controllers/pages')

router.get(['/', '/home'], Pages.index)
router.get('/grain', Pages.grain)
router.get('/contracts', Pages.contracts)
router.get('/buyers', Pages.buyers)
router.get('/sellers', Pages.sellers)
router.get('/warehouses', Pages.warehouses)
router.get('/blog', Pages.blog)
router.get('/account', Pages.account)
router.get('/profile', Pages.profile)
router.get('/bank', Pages.bank)
router.get('/mobileMoney', Pages.mobileMoney)

module.exports = router
