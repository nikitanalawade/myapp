var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/createWorker/:name/:company/:email', function(req, res, next) {

  var name=req.params.name
  var company=req.params.company
  var email=req.params.email

  var checkworker="SELECT Name FROM  Worker where Name=?";
        var value=[[name]]
        con.con.query(checkworker,[value],function (err, result1) {
            if (result1.length>0) {
                res.send("Worker Exists!")
            }
            else{
              var checksql="INSERT INTO Worker (Name, `Company Name`,Email) VALUES ?";
              var values =[[name,company,email]];
              con.con.query(checksql, [values],function (err, result) {
                if (err) throw err;
                else
                {
                    res.send("Worker Created");
                }
                });
            }

  
  }); 
});

module.exports = router;
