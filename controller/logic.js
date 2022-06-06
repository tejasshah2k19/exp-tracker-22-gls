module.exports.prime = function(req,res){
    let num = parseInt(req.body.num);
    let isPrime = true;
    //1 num 
    //2 -- num-1
    if(num > 0 ){
        //
        for(let i=2;i<=num-1;i++){
            if(num%i==0){
                isPrime = false
            }
        }
        if(isPrime == true){
            res.json({"prime":true})
        }else{
            res.json({"prime":false})
        }
        //res.json({"prime":isPrime})
    }else{

        res.json({"prime":"NAN"});
    }

}