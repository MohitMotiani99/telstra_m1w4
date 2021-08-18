var express = require('express')
var cors = require('cors')
var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

var MongoClient=require('mongodb').MongoClient
var url ='mongodb://127.0.0.1:27017'
var mydb='emp'
var collection='empc'

const {Kafka} = require('kafka')

async function run(data){
    const kafka = new Kafka({brokers:['localhost:9092']})

    const producer =kafka.producer()
    await producer.connect()

    await producer.send({
        topic: 'mymessage-service',
        messages:[
            {value:data}
        ]
    })
}


    MongoClient.connect(url,(err,db)=>{
        dbo=db.db(mydb)
        console.log(dbo)
        
        dbo.collection(collection).find({}).toArray((err,result)=>{
            var ans = JSON.stringify(result)
            console.log(ans)
            app.route("/items").get(function(req,res){
    
                run(ans).then(()=>console.log('Done'),err=>console.log(err))

                //res.send({'itemname':'coffee',"price":300})
                //res.send("item get")
            })
            .post(function(req,res){
                run().then(()=>console.log('Done'),err=>console.log(err))
                res.send("item post")
            })
            
        })
    
    })

app.listen(8089,()=>{
    console.log("server started")
})

