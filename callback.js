const request=require('request')
request('https://www.somepage.com',function(error,response,body){
if(error)
{
    //Handle error
}
else{
    //Success
}
});