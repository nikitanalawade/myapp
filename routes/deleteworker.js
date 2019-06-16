var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/deleteWorker/:name', function(req, res, next) {

  var name=req.params.name

  var checksql="DELETE FROM Worker WHERE NAME=?";
  var values =[[name]];
  con.con.query(checksql, [values],function (err, result) {
    if (err) throw err;
    else
    {
        res.send("Worker Deleted");
    }
    });
  }); 
   

module.exports = router;
