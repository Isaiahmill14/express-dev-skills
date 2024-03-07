var express = require('express');
var router = express.Router();

/* GET users listing. */

//starts with /skills
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
