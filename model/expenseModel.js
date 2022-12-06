const mongoose = require("mongoose")

const ExpenseSchema = new mongoose.Schema({
    amount:Number,
    date:String,
    payee:String,
    paymentmode:String,
    status:String,
    description:String
})

module.exports = mongoose.model("Expense",ExpenseSchema)