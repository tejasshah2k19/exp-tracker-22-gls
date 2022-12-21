const mongoose = require("mongoose")

const SubCategorySchema = new mongoose.Schema({
    subCategoryName: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model("SubCategory", SubCategorySchema)