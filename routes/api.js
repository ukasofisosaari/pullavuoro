var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/files', function(req, res, next) {
  res.render(JSON.stringify([]));
});

module.exports = router;
