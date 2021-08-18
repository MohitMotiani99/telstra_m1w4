// console.log('hello u')

// var c=require("./calculate")
// c.calculator()

var http=require('http')

//200-success
//403-unauthorised access
//404
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//always nme as req,res
var server = http.createServer((req,res)=>{
    console.log('servr started')
    res.writeHead(200,{'Content-Type':'text/html'})
    //writes status code and respone objcet
    //content-type is type of content to send from server
    res.write('hello from server')
    //writes on screen
    res.end()
    //end response cycle
    //if not given page wont load
})
server.listen(5055,()=>{
    console.log('to initialise resources for the start')
})