
function signup(req,resp){

    resp.json(req.body);
    // resp.json({
    //     "firstName":req.body.firstName
    // })
}

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
module.exports.signup = signup 