var fs  = require('fs')
var http=require('http')
// var item=[
//     {
//         itemname:"tea",
//         price:20
//     },
//     {
//         itemname:"Coffee",
//         price:30
//     }
// ]
//200-success
//403-unauthorised access
//404
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//always nme as req,res
var server = http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/'){
        res.write('Home Page')
        res.end()
    }
    else if(req.method=='GET' && req.url=='/api'){
        res.writeHead(200,{"Content-Type":"text/html"})
        //res.write('api page')
        res.write(index)
        //res.write(JSON.stringify(item))
        res.end()
    }
    //post is when data is in the message body not url
    //on is an event when we recieve request her
    //on data that is a request with data 
    //chunk is the thing that we send with post as the data
    //JSON
    if(req.method=='POST' && req.url=='/api'){
        req.on('data',(chunk)=>{
            console.log(chunk)//byte collection
            item.push(JSON.parse(chunk))
        })
        res.write('data stored')
        res.end()
    }
    if(req.method=='DELETE' && req.url.match(/api\/([a-z]+)/i)){
        const id=req.url.split("/")[2]
        console.log(id +" deleted")
        for(var i=0;i<item.length;i++){
            if(item[i].itemname==id){
                delete item[i]
                break
            }
        }
        res.write('data deleted')
        res.end()

    }
    if(req.method=='PATCH' && req.url=="/api"){
        req.on("data",(chunk)=>{
            console.log('patch request for updation '+chunk.toString())
            var obj=JSON.parse(chunk)
            for(var i=0;i<item.length;i++){
                if(item[i].itemname==obj.itemname)
                    item[i].price=obj.price
            }
        })
        res.write('updation done')
        res.end()
    }
})

var index=''
fs.readFile('index.html',function(err,data){
    index=data
    server.listen(5055,()=>{
        console.log('to initialise resources for the start')
    })    
})

