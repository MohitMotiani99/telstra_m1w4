var items=[]




var express = require('express')
var app = express()
app.use(express.urlencoded({extended:true}))
//app.use(express.json())
//allows to use components of the req body

app.use(express.static('public'))
var server =app.listen(8087,function(){
    console.log('server started to listen...')

})

app.get('/showitems',function(req,res){
    console.log('in showitems')
    res.send(items)
    //console.log(req.param('name'))
    //console.log(res.statusCode)
    //we get 304 id the data is just from url not from form data
})
app.get(/\/.*hello$/,(req,res)=>{
    res.send('heelo peter')
})
app.get('/show/:id/:name',(req,res)=>{
    console.log(req.params['id'])
    console.log(req.params['name'])
    res.send('id retrieved')
})
app.post('/',function(req,res){
    var data=req.body
    console.log(data)
    items.push(data)
    
    res.redirect('/')
    //res.send('data is '+data)
    console.log(res.statusCode)
    //ends the respnse cycle
})
app.put('/',function(req,res){
    
})
app.delete('/',function(req,res){
    
})


app.route('/items')
.get((req,res)=>{
    res.send('get reqiest')
})
.post((req,res)=>{
    res.send('posy req')
})
.put((req,res)=>{
    res.send('put req')
})
