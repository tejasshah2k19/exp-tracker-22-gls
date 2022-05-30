const http = require("http")

http.createServer(function(req,res){
  
    let url = req.url

    if(url == "/signup"){
        res.write("Signup");
        res.end()
    }else if(url == "/login"){
        res.write("Login")
        res.end()
    }else{
        res.write("404");
        res.end()
    }


}).listen(9999);




 //9000

//port 
//royal --> 

//login 
//signup
