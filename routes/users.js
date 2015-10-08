var express = require('express');
var router = express.Router();
var callAssign = require('../models/assignments');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/assignments', function(request, response, next){

})

module.exports = router;
