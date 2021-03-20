var fs=require('fs');

fs.access("./date.js",function(err){
    if(err)
    {
        console.log("directory does not exist");
    }
    else
    {
        console.log("Direcotry Exist");
    }
});