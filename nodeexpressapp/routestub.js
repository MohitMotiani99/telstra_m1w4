var express=require('express')
var app=express()
var router=express.Router()
//used when common functionality to perform for some apis
router.use(function(req,res,next){
    console.log('request recieved')
    next()//used to got the next correct rest api
})
router.get('/samplerouter',(req,res)=>{
    res.send('get request recieved')
    
})
router.post('/samplerouter',(req,res)=>{
    res.send('post req recieved')
})
app.use(router)

module.exports=router