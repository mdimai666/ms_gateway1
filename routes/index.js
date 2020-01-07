var express = require('express');
var router = express.Router();
var safestringify = require('json-stringify-safe')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data: safestringify(process.env) });
});

module.exports = router;
