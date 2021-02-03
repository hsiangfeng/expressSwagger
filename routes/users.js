var express = require('express');
var router = express.Router();

const usersControllers = require('../controllers/users');

const { post }= usersControllers;

/* GET users listing. */
router.get('/', usersControllers.home);

router.post('/post', post);

router.put('/put', function(req, res, next) {
  // #swagger.tags = ['User']
  res.send('respond with a resource');
});

router.delete('/delete', function(req, res, next) {
  // #swagger.tags = ['User']
  res.send('respond with a resource');
});


module.exports = router;
