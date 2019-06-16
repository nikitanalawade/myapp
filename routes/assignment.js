var express = require('express');
var router = express.Router();
var con=require('../connection')

/* GET users listing. */
router.get('/assign/:worker/:order', function(req, res, next) {

  var worker=req.params.worker
  var order=req.params.order
  var count=0
  
  var checkworker="SELECT workerid FROM  Worker where Name=?";
  var value=[[worker]]
  con.con.query(checkworker,[value],function (err, result) {
    if (result.length==0){
        res.send("Worker not Found! Create One!")
    }
    else
    {
        
        var checkoder="SELECT orderid FROM  `Work Order` where Title=?";
        var value=[[order]]
        con.con.query(checkoder,[value],function (err, result1) {
            if (result1.length==0) {
                res.send("Work Order not Found! Create One!")
            }
            else
            {
                console.log(result[0].workerid,result1.orderid)
                var values =[[result[0].workerid,result1[0].orderid]];
                var values1=[[result1[0].orderid]]

                var countsql='SELECT count(workerid) as count from Map where orderid=? '
                con.con.query(countsql,[values1],function(err,result){
                    if(err) throw err
                    else{
                        console.log("count",result[0].count)
                        count=result[0].count
              
                console.log("check",count)
            if(count+1<=5){
                var checksql="INSERT INTO Map (WorkerId,OrderId) VALUES ?";
           
            con.con.query(checksql, [values],function (err, result) {
                if (err) {
                    res.send("Worker Already Assigned!")
                }
                else
                {
                    res.send("Worker Assigned!");
                }
                }); 
                }
            
                else{
                    res.send("No more than 5 workers can be assigned!")
                }
         
            }
        });
            
    }
});
    }
}); 

});

module.exports = router;
