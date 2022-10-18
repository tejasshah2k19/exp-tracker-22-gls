const UserModel = require("../model/userModel")


module.exports.login = function (req, res) {

    //logic 
    let email = req.body.email
    let password = req.body.password

    UserModel.findOne({
        $and: [
            { "email": email },
            { "password": password }
        ]
    }).populate("role").exec(function (err, data) {
        if (data == "" || data == undefined) {
            res.json({
                status: -1,
                msg: "Invalid Credentails",
                data: req.body
            })
        } else {
            res.json({
                status: 200,
                msg: "Login done...",
                data: data
            })
        }
    });

}
module.exports.signup = function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role
    console.log(req.body);
    let u = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "role": role
    }


    let user = new UserModel(u)

    user.save(function (err, success) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user added",
                data: success
            })
        }
    })
}


module.exports.getAllUsers = function (req, res) {
    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "User Reter....",
                data: data
            })
        }
    })
}


module.exports.forgetPassword = function(req, res) {

    let email = req.body.email 
    let isCorrect = false;
    let  otp = parseInt(Math.random()*1000000);
    //authenticate 
    
    UserModel.findOne({"email":email},function(err,user){
        if(err){
            console.log("Error"+err)
            
        }else{

            if(user == null || user == undefined ){
                res.json({
                    data:req.body,
                    msg:"Invalid Email",
                    status:-1
                })
            }else{
                res.json({
                    data:otp,
                    msg:"Otp Sent",
                    status:200
                })
            }
        }
    })
    
   

}


module.exports.resetPassword = function(req, res) {

    let email = req.body.email 
    let isCorrect = false;
    let otp = req.body.otp
    let password = req.body.password

    //authenticate 
    for(i=0;i<users.length;i++){//10
        if(users[i].email == email && users[i].otp == otp){
            
            users[i].otp = -12345;
            isCorrect  = true;
            users[i].password = password
            break;
        }
    }

    if(isCorrect == true){
        res.json({
            data:req.body,
            msg:"Password Successfully modified",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Data",
            status:-1
        })
    }
   

}

