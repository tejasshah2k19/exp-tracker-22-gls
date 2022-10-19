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


module.exports.forgetPassword = function (req, res) {

    let email = req.body.email
    let isCorrect = false;
    let otp = parseInt(Math.random() * 1000000);
    //authenticate 

    UserModel.findOne({ "email": email }, function (err, user) {
        if (err) {
            console.log("Error" + err)

        } else {

            if (user == null || user == undefined) {
                res.json({
                    data: req.body,
                    msg: "Invalid Email",
                    status: -1
                })
            } else {

                //send mail - otp 
                //user - otp update 
                UserModel.updateOne({ "email": email }, { "otp": otp }, function (err, data) {
                    if (err)
                        console.log(err)
                    else
                        console.log(data)
                })
                res.json({
                    data: "Please Check Your email",
                    msg: "Otp Sent Please Check Your email",
                    status: 200
                })
            }
        }
    })



}


module.exports.resetPassword = function (req, res) {

    let email = req.body.email
    let isCorrect = false;
    let otp = req.body.otp
    let password = req.body.password

    //authenticate 
    UserModel.findOne({ "email": email }, function (err, user) {
        if (err) {
            console.log(err);
        } else {

            if (user == null || user == undefined) {
                res.json({
                    data: req.body,
                    msg: "Invalid Data",
                    status: -1
                })
            } else {

                if (user.otp == otp) {
                    UserModel.updateOne({"email":email},{"password":password,"otp":""},function(err,data){
                        if(err)
                            console.log(err)
                        else{
                            res.json({
                                data:"User Modified",
                                msg:"Password Reset Successfully....",
                                status:200
                            })
                        }    
                    })
                } else {
                    res.json({
                        data: req.body,
                        msg: "Invalid OTP",
                        status: -1
                    })
                }
            }
        }
    })

    if (isCorrect == true) {
        res.json({
            data: req.body,
            msg: "Password Successfully modified",
            status: 200
        })
    } else {

    }


}

