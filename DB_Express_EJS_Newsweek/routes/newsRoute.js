var express = require('express');
var router = express.Router();
var generalController = require('../controllers/generalController');

router.get('/', generalController.homepage);
router.get('/news/:id', generalController.newspage);

module.exports = router;