const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/stripe', homeController.stripeData);

module.exports = router;
