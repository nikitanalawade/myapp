var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/createWorkOrder/:title/:desc/:deadline', function(req, res, next) {

  var title=req.params.title
  var desc=req.params.desc
  var deadline=req.params.deadline

  var checksql="INSERT INTO `Work Order` (Title, Description,Deadline) VALUES ?";
  var values =[[title,desc,deadline]];
  con.con.query(checksql, [values],function (err, result) {
    if (err) throw err;
    else
    {
        res.send("Work Order Created");
    }
    });
  }); 
   

module.exports = router;
