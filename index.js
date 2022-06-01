const express =  require("express")
const session = require("./session")
const calc = require("./calc")

const app = express()


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
  
// app.get('/login', function (req, res) {
//     res.send('Login')
// })

app.get("/login",session.login)
app.get("/forgetpassword",session.forgetPassword)

app.post("/add",calc.add)
app.post("/sub",calc.sub)



app.listen(9999,function(){
    console.log("server started...on 9999");
})


