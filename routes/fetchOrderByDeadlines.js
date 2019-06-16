var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/fetchOrders', function(req, res, next) {

  var checksql="SELECT * FROM  `Work Order` ORDER BY Deadline DESC";
  con.con.query(checksql,function (err, result) {
    if (err) throw err;
    else
    {
        res.send(result);
    }
    });
  }); 
   

module.exports = router;
