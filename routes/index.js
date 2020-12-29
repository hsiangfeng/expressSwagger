var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function (req, res, next) {
    // #swagger.tags = ['Index']
    res.render('index', { title: 'Express' });
  })
  .post('/post', function (req, res, next) {
    // #swagger.tags = ['Index']
    res.render('index', { title: 'Express' });
  })
  .put('/put', function (req, res, next) {
    // #swagger.tags = ['Index']
    res.render('index', { title: 'Express' });
  })
  .delete('/delete', function (req, res, next) {
    // #swagger.tags = ['Index']
    res.render('index', { title: 'Express' });
  });

module.exports = router;
