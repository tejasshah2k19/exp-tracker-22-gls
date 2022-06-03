//login 

function login(req,res){
    res.send("Login");
}

//forgetpassword 
function forgetPassword(req,res){
    res.send("ForgetPAssword");
}

module.exports.login = login 
module.exports.forgetPassword  = forgetPassword