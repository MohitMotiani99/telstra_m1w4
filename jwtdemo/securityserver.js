var jwt =require('jsonwebtoken')
const { JsonWebTokenError } = require("jsonwebtoken")

var express=require('express')
var cors=require('cors')
var app=express()

//json at both register and login
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
function gettoken(obj){
    // var userobj={
    //     'username':username,
    //     'password':password
    // }
    return jwt.sign(obj,"hello")
}
function validate(t,pass){
    return jwt.verify(t,pass)
}
var server=app.listen(8089,()=>{
    console.log('security server started')
})

app.post('/register',(req,res)=>{
    var userobj=req.body
    var token=gettoken(userobj)
    console.log(token)
    res.send({"token":token,"secret":"hello"})
})
app.post('/login',(req,res)=>{
    var t=req.body.token
    var secret =req.body.secret
    console.log(secret)
    var auth=validate(t,secret)
    console.log(auth)
    res.send('authed')
})



// console.log(gettoken("peter",123))