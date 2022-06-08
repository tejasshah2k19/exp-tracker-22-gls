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

module.exports.findMax = function(req,res){

    let a = []
    let b = [1,2,3,4,5]
   
    a.push(9); //
    console.log(a[0]);
    console.log(b);
   
    
    // let userArray = [parseInt(req.body.n1),parseInt(req.body.n2),parseInt(req.body.n3)]
    let userArray = req.body.num 
   
    
   // userArray.push(parseInt(req.body.n1));
    // userArray.push(parseInt(req.body.n2));

    // for(i=0;i<req.body.num.length;i++){
    //     userArray.push(parseInt(req.body.num[i]))
    // }

    let max = userArray[0];
    for(i=0;i<userArray.length;i++){
       
        if(userArray[i] > max){
            max = userArray[i]
        }
    }
    console.log(req.body);
    res.json({"max":max})


}