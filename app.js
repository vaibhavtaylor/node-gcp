'use strict';

var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function(req, res){
    res.status(200).send("Hello from Node GCP");
});

app.get('/mysql', function(req, res){
    // res.status(200).send("User Pager");
    var con = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: "root"
      });
      
      con.connect(function(err) {
        if (err) {
            console.log("Error Mysql");
            throw err;
        }
        console.log("connected");
        res.send("Connected");
        // con.query("SELECT * FROM customers", function (err, result, fields) {
        //   if (err) throw err;
        //   console.log(result);
        //   res.send("Mysql Page");
        // });
      });
});

var server = app.listen(process.env.PORT || '8080', function() {
    console.log("App Listening on Port 8080");
})