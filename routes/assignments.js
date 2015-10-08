var express = require('express');
var router = express.Router();
var callAssign = require('../models/assignments');



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('route assignment respond with a resource');
});



router.get('/assignment', function(request, response, next){
    console.log("hitting assignment route");
    callAssign.find({}, function(err, assignments){
        console.log('Called Assignments');
        response.json(assignments);
    })
});

router.post('/new', function(request, response, next) {
    console.log(request.body);
    callAssign.create(request.body, function(err, post){
        response.send('ok');
    })
});


module.exports = router;