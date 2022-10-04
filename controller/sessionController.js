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


