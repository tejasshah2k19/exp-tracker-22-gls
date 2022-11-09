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