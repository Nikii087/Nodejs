var fs=require('fs');

try{
    if(fs.existsSync("./myapp"))
    {
        console.log("Directory does not exist");
    }
    else
    {
        console.log("Directory Exist");
    }
}
catch(e)
{
    console.log("An err occured");
}