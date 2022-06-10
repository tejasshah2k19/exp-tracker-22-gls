

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
    let userId = parseInt(Math.random() * 1000000);

    //validation 
    let isError = false;
    let errorMsg = [];

    if (firstName == undefined || firstName.trim().length == 0) {
        isError = true;
        errorMsg.push({
            "firstNameError":"Please Enter FirstName"
        }) 

    }
    if (email == undefined || email.trim().length == 0) {
        isError = true; 
        errorMsg.push({
            "emailError":"Please Enter Email"
        })
    }

    //format 
    //duplicate 

    if (isError == true) {
        //error
        resp.json({
            "error": errorMsg,
            "status":-1,
            "msg":"Please Solve Error"
        })
    } else {
        users.push({
            "firstName": firstName,
            "email": email,
            "userId": userId,
            "password": password
        })//0  

        console.log(users);

        resp.json({
            "msg": "Signup Done",
            "status":200
        })
    }
}

//login 

function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    //authenticate 

    res.send("Login");
}

//forgetpassword 
function forgetPassword(req, res) {
    res.send("ForgetPAssword");
}

module.exports.login = login
module.exports.forgetPassword = forgetPassword
module.exports.signup = signup 