var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});
 con.connect(function(err)
 {
     if (err) throw err
     console.log("Connected");
     con.query("SELECT * FROM customers2", function (err, result, fields) {
         if (err) throw err
         console.log(fields);
         
   

     });
 });