const ProductModel = require("../model/productModel")

module.exports.addProduct = function (req, res) {
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty

    let product = new ProductModel(
        { "productName": productName, "price": price, "qty": qty }
    )

    product.save(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                msg: "product not added",
                status: -1,
                data: "SmW"
            })
        } else {
            res.json({
                msg: "product added",
                status: 200,
                data: data
            })
        }
    })
}//addProduct 


//getAllProducts 
module.exports.getAllProducts = function(req,res){
    ProductModel.find(function(err,data){
        console.log(err);
        if(err){
            res.json({
                msg: "SMW",
                status: -1,
                data: err
            })
        }else{
            res.json({
                msg: "products ret...",
                status: 200,
                data: data
            })
        }
    })
}//getAllProducts 



//deleteProduct
module.exports.deleteProduct = function(req,res){

    let productId = req.body.productId 
    ProductModel.deleteOne({_id:productId},function(err,data){
        console.log(err);
        if(err){
            res.json({
                msg: "SMW",
                status: -1,
                data: productId
            })
        }else{
            res.json({
                msg: "products removed...",
                status: 200,
                data: data
            })
        }
    })


}//deleteProduct 

//updateProduct
module.exports.updateProduct = function(req,res){
    let productId = req.body.productId
    let price = req.body.price 
    let qty  = req.body.qty

    ProductModel.updateOne({_id:productId},{price:price,qty:qty},function(err,data){
        console.log(err);
        if(err){
            res.json({
                msg: "SMW",
                status: -1,
                data: productId
            })
        }else{
            res.json({
                msg: "products updated...",
                status: 200,
                data: data
            })
        }
    })

}//updateProduct 