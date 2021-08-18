var express=require('express')
var app=express()
var request = require('request')
app.listen(5000,()=>{
    console.log('service started')
})


const hostendpoint='http://localhost:8089/items'

var MongoClient=require('mongodb').MongoClient
var url ='mongodb://127.0.0.1:27017'
var mydb='emp'
var collection='empc'

MongoClient.connect(url,(err,db)=>{
    dbo=db.db(mydb)
    console.log(dbo)

    dbo.collection(collection).find({}).toArray((err,result)=>{
        var ans = JSON.stringify(result)

        console.log(ans)
        app.route('/itemservice')
        .get((req,res)=>{
            request.get({
                header:{'Content-Type':'application/json'},
                url:hostendpoint,
                
                },(err,response)=>{
                    console.log(err)
                    console.log(response)
                    console.log(response.body)
            })
        })
        .post((req,res)=>{
            request.post({
                header:{'Content-Type':'application/json'},
                url:hostendpoint,
                body:{
                    'data':ans
                }
            },(err,response)=>{
                console.log(err)
                console.log(response)
                //console.log(response.body)
        
            })
        })
    
    })

    

})

