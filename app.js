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
        host: "35.188.161.30",
        port: 3306,
        user: "root",
        password: "root",
        database: "demo",
        // socketPath: "/cloudsql/node-gcp-189007:us-central1:demodb"
      });
      
      con.connect(function(err) {
        if (err) {
            res.status(200).send("Mysql Error");
            throw err;
        }
        console.log("connected");
        // res.send("Mysql Connected");
        con.query("SELECT * FROM demo.locness", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send("Mysql Page");
        });
      });
});

var server = app.listen(process.env.PORT || '8080', function() {
    console.log("App Listening on Port 8080");
})