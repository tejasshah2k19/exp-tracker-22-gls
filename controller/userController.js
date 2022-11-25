const UserModel = require("../model/userModel")


module.exports.deleteUser = function (req, res) {
 
    UserModel.deleteOne({ _id: req.params.userId }, function (err, success) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user remove",
                data: success
            })
        }
    })

}


module.exports.getUserById = function(req,res){
    let userId = req.params.userId

    UserModel.findOne({_id:userId},function(err,data){
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user reterieved..",
                data: data
            })
        }
    })
}


module.exports.updateUser  = function(req,res){
    let userId = req.body.userId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName; 

    UserModel.updateOne({_id:userId},{"firstName":firstName,"lastName":lastName},function(err,data){
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user update..",
                data: data
            })
        }
    })
}