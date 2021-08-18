var express = require('express')
var app =express()

var MongoClient = require('mongodb').MongoClient
app.use(express.urlencoded({extended:true}))

var server =app.listen(8089,()=>{
    console.log('server started')
})

const {Kafka} = require('kafkajs')

var url ='mongodb://127.0.0.1:27017'
var mydb='emp'
var collection='empc'

async function run(){
    const kafka = new Kafka({brokers:['localhost:9092']})

    const producer =kafka.producer()
    await producer.connect()

    await producer.send({
        topic: 'mymessage-service',
        messages:[
            {value:'Emp added'}
        ]
    })
}
app.use(express.static('public'))
MongoClient.connect(url,(err,db)=>{
    if(err)
    throw err
    dbo=db.db(mydb)
    console.log(dbo)

    dbo.createCollection(collection,(err,result)=>{
        console.log('collection created')
    })
    app.post('/add',(req,res)=>{
        var data = req.body
        dbo.collection(collection).insertOne(data,(err,result)=>{
            console.log(result)
            run().then(()=>console.log('Done'),err=>console.log(err))
            console.log('added')
            res.send('data added')
        })
    })
})