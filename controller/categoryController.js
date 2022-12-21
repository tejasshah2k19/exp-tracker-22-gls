const CategoryModel = require("../model/categoryModel")


//add category 
module.exports.addCategory = function (req, res) {
    let categoryName = req.body.categoryName

    let category = new CategoryModel({
        "categoryName": categoryName
    })

    category.save(function (err, data) {
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
                msg: "Category Added",
                data: data
            })

        }
    })
}

//list category
module.exports.getAllCategories = function (req, res) {
    CategoryModel.find(function (err, data) {
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
                msg: "Categories Reterived",
                data: data
            })
        }
    })
}

//delete category
module.exports.deletecategory = function (req, res) {
    
    console.log("category id ==> " + req.query.categoryId)
    CategoryModel.deleteOne({ _id: req.query.categoryId }, function (err, data) {
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
                    data: "Category Id does not Exists..."
                })
            } else {
                res.json({
                    status: 200,
                    msg: "Category removed..",
                    data: data
                })
            }
        }
    })
}

//modify category 


module.exports.updatecategory = function (req, res) {
    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName
    //update category set categoryName = :categoryName where _id = :categoryId 
    CategoryModel.updateOne({ _id: categoryId }, { "categoryName": categoryName }, function (err, data) {
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
                msg: "Category modified",
                data: data
            })
        }
    })
}



















