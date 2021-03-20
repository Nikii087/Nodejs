const fs = require('fs');

var f1 = "file1.txt";
var f2 = "file2.txt";

fs.readFile(f1, function (err, data) {
    if (err) throw err;
    fs.appendFile(f2, data.toString(), function (err) {
        if (err) throw err;
        console.log('Data Updated...');
    });
});
