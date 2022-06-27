const RoleModel = require("../model/roleModel")



//add role 
module.exports.addRole = function (req, res) {
    let roleName = req.body.roleName

    let role = new RoleModel({
        "roleName": roleName
    })

    role.save(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "Role Added",
                data: data
            })

        }
    })
}

//list role
module.exports.getAllRoles = function (req, res) {
    RoleModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "Roles Rete...",
                data: data
            })
        }
    })
}

//delete role
module.exports.deleteRole = function (req, res) {
    
    console.log("role id ==> " + req.query.roleId)
    RoleModel.deleteOne({ _id: req.query.roleId }, function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: err
            })
        } else {
            if (data.deletedCount == 0) {
                res.json({
                    status: -1,
                    msg: "SMW",
                    data: "Role Id does not Exists..."
                })
            } else {
                res.json({
                    status: 200,
                    msg: "role removed..",
                    data: data
                })
            }
        }
    })
}

//modify role 


module.exports.updateRole = function (req, res) {
    let roleId = req.body.roleId
    let roleName = req.body.roleName
    //update role set roleName = :roleName where _id = :roleId 
    RoleModel.updateOne({ _id: roleId }, { "roleName": roleName }, function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "role modify..",
                data: data
            })
        }
    })
}



















