var MongoClient=require('mongodb').MongoClient
var express=require('express')
var url="mongodb://127.0.0.1:27017"
var mydb="Books"
var collection='bookcollection'

var app=express()
app.set("view engine",'jade')
app.use(express.json())
var server = app.listen(8089,()=>{
    console.log('server started')
})
MongoClient.connect(url,function(err,db){
    if(err)
        throw err
    dbo=db.db(mydb)//database object MongoClient.db created database object
    //console.log(dbo)
    // dbo.createCollection(collection,function(err,res){
    //     if(err)
    //     throw err
    //     console.log(res)
    //     console.log('collection created')
    // })

    // var book={
    //     "bookname":"Peter Goes to school",
    //     "price":200,
    //     "author":"ASP"
    // }

    // dbo.collection(collection).insertOne(book,function(err,res){
    //     if(err) throw err
    //     console.log(res)
    // })
    // var books=[
    //     {
    //         bookname:"Jason story",
    //         price:300,
    //         author:"kemp"
    //     },
    //     {
    //         bookname:"peter pan",
    //         price:400,
    //         author:"kanny"
    //     }
    // ]
    // dbo.collection(collection).insertMany(books,function(err,res){
    //     if(err) throw err
    //     console.log(res)
    // })

    //dbo.collection(collection).deleteOne({bookname:"Jason story"})
    //dbo.collection(collection).updateOne({"bookname":"peter pan"},{$set:{"price":100}})
    

    app.get('/books',function(req,res){
        dbo.collection(collection).find({}).toArray(function(err,result){
            if(err) throw err
            res.render("books.jade",{bookresult:result})
        })
    })
    app.get('/bookhome',(req,res)=>{
        res.render('books.jade')
    })
    app.post('/books',(req,res)=>{
        dbo.collection(collection).insertOne(req.body,function(err,result){
            console.log(result)
            res.send('Record inserted')
        })
    })
    app.delete('/books',(req,res)=>{
        dbo.collection(collection).deleteOne(req.body,function(err,result){
            console.log(result)
            res.send('Record Deleted')
        })
    })
    app.patch('/books',(req,res)=>{
        dbo.collection(collection).updaateOne(req.body,function(err,result){
            console.log(result)
            res.send('Record Updated')
        })
    })
})