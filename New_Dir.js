var fs=require('fs');

fs.mkdir("./Mynew1_Dir",function(err){
    if(err)
    {
        console.log("directory does not exist");
    }
    else
    {
        console.log(" New direcotry created successfully");
    }
});