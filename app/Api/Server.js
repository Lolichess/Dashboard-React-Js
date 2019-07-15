var mysql = require('mysql');
var json2xls = require('json2xls');
var con = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'reports'
});
var path = require('path');
var mime = require('mime');
var fs = require('fs');

const express = require('express');


var cors = require('cors');

const bodyParser = require('body-parser');

const logger = require('morgan');


var mongo = require('mongodb').MongoClient;


const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();


var url = 'mongodb://localhost:27017/';

app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use(logger('dev'));




router.get('/whitoutMatch' , (req , res) => {

        var res_json = []
        var ad = "SELECT * FROM automatic WHERE automatic.saleID is NULL and automatic.po LIKE '%LionP%'";
        var tr = "SELECT * FROM tucker_email_invoice WHERE ( tucker_email_invoice.Your_PO = '' or tucker_email_invoice.Your_PO is NULL)";
        var wps = "SELECT * FROM wps_invoice WHERE wps_invoice.custome_po = '' or wps_invoice.saleID = '' or wps_invoice.saleID is NULL or wps_invoice.custome_po is NULL ";
        var wh_invoice = "SELECT * FROM wh_invoice WHERE  wh_invoice.customer_po = '' or wh_invoice.customer_po is NULL ";
        con.query(ad,function(err,result){
            if(err) throw err;
            res_json.push(result);
            con.query(tr,function(err,result){
                if(err) throw err;
                res_json.push(result);
                con.query(wps,function(err,result){
                    if(err) throw err;
                    res_json.push(result);

                    con.query(wh_invoice,function(err,result){
                        if(err) throw err;
                        res_json.push(result);
                        return res.json({success:true,data:res_json});
                    });

                });
            });
        });       
});


router.get('/getData', (req, res) => {
     /*var url = 'mongodb://localhost:27017/';
        mongo.connect(url,{useNewUrlParser:true},(err,mg)=>{
            var dbo = mg.db('test');
            dbo.collection('users').find({}).toArray((err,result) => {

                if (err) return res.json({ success: false, error: err });
                return res.json({ success: true, data: result });
                
            });

        });*/

		console.log("Connected!!");
		var sql = "SELECT * FROM transaction_report WHERE transaction_report.saleID is not null";
		con.query(sql,function(err,result){
			if(err) throw err;
			return res.json({success:true,data:result});
		});



  });

router.get('/download',(req,res) =>{
	

  var file = '../src/data.xlsx';
        fs.readFile(file, function (err,data){
            res.contentType("application/vnd.ms-excel");
            res.send(data);
        });
	

});

router.post('/download_xlsx',(req,res) =>{
	//console.log(req.body)
	var xls = json2xls(req.body);
	fs.writeFileSync('../src/data.xlsx', xls, 'binary');
	var file = '../src/data.xlsx';
	/*fs.readFile(file, function (err,data){
            res.contentType("application/vnd.ms-excel");
            res.send(data);
        });*/
	return res.send('Good!!');
	
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
