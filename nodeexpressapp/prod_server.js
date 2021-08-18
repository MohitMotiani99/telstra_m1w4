var express = require('express')
var app =express()
var prods=[]
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))
var server=app.listen(8087,()=>{
    console.log('server started')
})
app.get('/allitems',(req,res)=>{
    res.send(prods)
})
app.post('/add',(req,res)=>{
    var data = req.body
    prods.push(data)
    console.log(data)
    console.log('item added')
    res.send('done')
})

app.route('/viewData')
.get((req,res)=>{
    res.send(prods)
})
.post((req,res)=>{
    var data = req.body
    var prod_ans=[]
    for(let i=0;i<prods.length;i++){
        if(prods[i].prod_name==data)
    }
})