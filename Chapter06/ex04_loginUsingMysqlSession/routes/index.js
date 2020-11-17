var express = require('express');
var router = express.Router();
var model = require('../models/dramaDAO');

router.get('/', function(req, res) {
    res.render('index', { title: 'My Favorite Drama List' });
});

module.exports = router;
