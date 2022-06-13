

let users = []
users.push({

    firstName: 'ram',
    email: 'ram@gmail.com',
    userId: 19295,
    password: '123'

}, {
    firstName: 'sita',
    email: 'sita@gmail.com',
    userId: 519038,
    password: '12345'
})

function signup(req, resp) {

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password

    //validation 
    let isError = false;
    let errorMsg = [];

    if (firstName == undefined || firstName.trim().length == 0) {
        isError = true;
        errorMsg.push({
            "firstNameError": "Please Enter FirstName"
        })

    }
    if (email == undefined || email.trim().length == 0) {
        isError = true;
        errorMsg.push({
            "emailError": "Please Enter Email"
        })
    }

    //format 
    //duplicate 

    if (isError == true) {
        //error
        resp.json({
            "data": errorMsg,
            "status": -1,
            "msg": "Please Solve Error"
        })
    } else {

        let userId = parseInt(Math.random() * 1000000);
        users.push({
            "firstName": firstName,
            "email": email,
            "userId": userId,
            "password": password
        })//0  

        console.log(users);

        resp.json({
            "msg": "Signup Done",
            "status": 200,
            "data":req.body
        })
    }
}

//login 

function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let isCorrect = false;
    let user = undefined 
    //authenticate 
    for(i=0;i<users.length;i++){//10
        if(users[i].email == email && users[i].password == password ){
            user = users[i];
            isCorrect  = true;
            break;
        }
    }

    if(isCorrect == true){
        res.json({
            data:user,
            msg:"Login done",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Credentials",
            status:-1
        })
    }
    
}

//forgetpassword - email - present - otp 
function forgetPassword(req, res) {

    let email = req.body.email 
    let isCorrect = false;
    let otp = 0 
    //authenticate 
    for(i=0;i<users.length;i++){//10
        if(users[i].email == email){
            otp = parseInt(Math.random()*1000000);
            users[i].otp = otp;
            isCorrect  = true;
            break;
        }
    }

    if(isCorrect == true){
        res.json({
            data:otp,
            msg:"Otp Sent",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Email",
            status:-1
        })
    }
   

}


function resetPassword(req, res) {

    let email = req.body.email 
    let isCorrect = false;
    let otp = req.body.otp
    let password = req.body.password

    //authenticate 
    for(i=0;i<users.length;i++){//10
        if(users[i].email == email && users[i].otp == otp){
            
            users[i].otp = -12345;
            isCorrect  = true;
            users[i].password = password
            break;
        }
    }

    if(isCorrect == true){
        res.json({
            data:req.body,
            msg:"Password Successfully modified",
            status:200
        })
    }else{
        res.json({
            data:req.body,
            msg:"Invalid Data",
            status:-1
        })
    }
   

}

function getAllUsers(req,res){
    res.json({
        msg:"user ret",
        data:users,
        status:200
    })
}


module.exports.login = login
module.exports.forgetPassword = forgetPassword
module.exports.signup = signup 
module.exports.resetPassword = resetPassword
module.exports.getAllUsers = getAllUsers