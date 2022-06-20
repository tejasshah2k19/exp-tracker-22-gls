const express = require("express") // npm install express --save  
const productController = require("./controller/productController")
const mongoose = require("mongoose")  //npm install mongoose --save 


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/product",productController.addProduct)
app.get("/product",productController.getAllProducts)
app.delete("/product",productController.deleteProduct)
app.put("/product",productController.updateProduct)



mongoose.connect("mongodb://localhost:27017/amazon2022",function(err){
    if(err){
        console.log("SMW");
        console.log(err);

    }else{
        console.log("Db Connected....")
    }
})

app.listen(9999,function(err){
    if(err){
        console.log("Server not connected....");
    }else{
        console.log("server started....at 9999");
    }
})