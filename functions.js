
function add(a,b,callBackFunction){
    //
    //
    //
    //
    ans = a+b;//10
    callBackFunction(ans);
    return ans;//10

}

function sqr(a){
    return a*a;//100
}

ans = add(5,5,sqr);//10
// sqrAns = sqr(ans)//100

console.log(sqrAns);

add(5,5,function(ans){
    return ans*ans;
});

 























