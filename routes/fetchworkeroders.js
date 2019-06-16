var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/fetchWorkerOrders/:name', function(req, res, next) {

  var name=req.params.name

  var checksql="select a.OrderId,a.Title,a.Description,a.Deadline from `Work Order` a inner join Map m inner join Worker w on m.OrderId=a.OrderId and m.WorkerId=w.WorkerId where w.Name=?";
  var values =[[name]];
  con.con.query(checksql, [values],function (err, result) {
    if (err) throw err;
    else
    {
        res.send(result);
    }
    });
  }); 
   

module.exports = router;
