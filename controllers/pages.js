module.exports = {
  index: function (req, res, next) {
    res.render('dashboard/index', { title: 'Home' })
  },

  grain: function (req, res, next) {
    res.render('grain/index', { title: 'Grain' })
  },

  contracts: function (req, res, next) {
    res.render('contracts/index', { title: 'Contracts' })
  },

  buyers: function (req, res, next) {
    res.render('buyers/index', { title: 'Buyers' })
  },

  sellers: function (req, res, next) {
    res.render('sellers/index', { title: 'Sellers' })
  },

  warehouses: function (req, res, next) {
    res.render('warehouses/index', { title: 'Warehouses' })
  },

  blog: function (req, res, next) {
    res.render('blog/index', { title: 'Blog' })
  },

  account: function (req, res, next) {
    res.render('account/index', { title: 'Account' })
  },

  profile: function (req, res, next) {
    res.render('account/profile', { title: 'Profile' })
  },

  mobileMoney: function (req, res, next) {
    res.render('account/mobileMoney', { title: 'MobileMoney' })
  },

  bank: function (req, res, next) {
    res.render('account/bank', { title: 'Bank' })
  }
}
