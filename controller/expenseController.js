const ExpenseModel = require("../model/expenseModel")

module.exports.getThisMonthExpenses = function (req, res) {
    let m = new Date().getMonth() + 1;
    let y = new Date().getFullYear();

    //db 
    // ExpenseModel.find($AND:{ $gt:{date}  }}
    ExpenseModel.find(
        {

            "$and": [
                {
                    "$expr": {
                        "$eq": [{ $month: { $dateFromString: { "dateString": "$date" } } }, m]
                    }
                }
                ,
                {
                    "$expr": {
                        "$eq": [{ $year: { $dateFromString: { "dateString": "$date" } } }, y]
                    }
                }
            ]

        }, function (err, data) {
            if (err) {

            } else {

                res.json({
                    data: data,
                    status: 200,
                    msg: "Done"
                })
            }
        }
    )
}




module.exports.getCurrentYearExpenses = function (req, res) {
    let y = new Date().getFullYear();

    //db 
    // ExpenseModel.find($AND:{ $gt:{date}  }}
    ExpenseModel.find(
        {

            "$expr": {
                "$eq": [{ $year: { $dateFromString: { "dateString": "$date" } } }, y]
            }

        }, function (err, data) {
            if (err) {

            } else {

                res.json({
                    data: data,
                    status: 200,
                    msg: "Done"
                })
            }
        }
    )
}

module.exports.getAllExp = function (req, res) {
    ExpenseModel.find(function (err, data) {
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
                msg: "All Expenses Retrived..",
                data: data
            })
        }
    });
}

module.exports.addExp = function (req, res) {
    let exp = new ExpenseModel(req.body);
    exp.save(function (err, success) {

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
                msg: "Expense Added",
                data: success
            })
        }
    })
}