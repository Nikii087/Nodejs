var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers2 (name, address) VALUES ?";
    var values = [
      ['Nike', 'Pc'],
      ['Hit', 'Malegaon'],
      ['Shruti', 'Dhule'],
      ['Kiri', 'Pachora'],
      ['Komal', 'Jalgaon'],
      
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
  