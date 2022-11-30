const express = require("express") 
const calc = require("./controller/calc")
const logic = require("./controller/logic")
const sessionController  = require("./controller/sessionController")
const roleController = require("./controller/roleController")
const userController = require("./controller/userController")
const expenseController = require("./controller/expenseController")


const mongoose = require("mongoose");
const cors = require("cors")



const app = express()
//middle wares 
app.use(express.json())//body
app.use(express.urlencoded({ extended: true }))//body
app.use(cors())
//image pdf audio video ---> file 


//database configuration 
mongoose.connect("mongodb://localhost/royaldb", function (err) {
    if (err) {
        console.log("something went wrong....");
        console.log(err);
    } else {
        console.log("db Connected......");
    }
})




//REST apis 


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/login', function (req, res) {
//     res.send('Login')
// })

// app.post("/login", session.login)
// app.post("/forgetpassword", session.forgetPassword)
// app.post("/signup", session.signup)
// app.post("/reset", session.resetPassword)
// app.get("/users", session.getAllUsers)




//api-db 

app.post("/register",sessionController.signup)
app.get("/getallusers",sessionController.getAllUsers)
app.post("/login",sessionController.login)
app.post("/forgetpassword",sessionController.forgetPassword)
app.put("/resetpassword",sessionController.resetPassword)


//role 
app.post("/role",roleController.addRole)
app.delete("/role",roleController.deleteRole)
app.put("/role",roleController.updateRole)
app.get("/role",roleController.getAllRoles)


//users - admin 
app.delete("/deleteuser/:userId",userController.deleteUser)
app.get("/getuserbyid/:userId",userController.getUserById)
app.put("/updateuser",userController.updateUser)


//expenses
app.get("/getthismonthexpense",expenseController.getThisMonthExpenses)
app.post("/addexpense",expenseController.addExp)
app.get("/getallexpenses",expenseController.getAllExp)

app.listen(9999, function () {
    console.log("server started...on 9999");
})


