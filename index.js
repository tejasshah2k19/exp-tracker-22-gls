const express =  require("express")
const session = require("./controller/session")
const calc = require("./controller/calc")
const logic = require("./controller/logic")


const app = express()

app.use(express.json())//body
app.use(express.urlencoded({extended:true}))//body
//image pdf audio video ---> file 


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
  
// app.get('/login', function (req, res) {
//     res.send('Login')
// })

app.post("/login",session.login)
app.post("/forgetpassword",session.forgetPassword)
app.post("/signup",session.signup)
app.post("/reset",session.resetPassword)
app.get("/users",session.getAllUsers)


app.post("/add",calc.add)
app.post("/sub",calc.sub)

app.post("/prime",logic.prime)
app.post("/max",logic.findMax)


app.listen(9999,function(){
    console.log("server started...on 9999");
})


