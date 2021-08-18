const { fstat } = require('fs')
var http = require('http')
var prods=[
    {
        product_name:'book',
        price:200,
        quantity:100
    },
    {
        product_name:'bookShelf',
        price:6000,
        quantity:20
    }
]
var server=http.createServer((req,res)=>{

    // let headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    //     "Access-Control-Max-Age": 2592000, // 30 days
    //     /** add other headers as per requirement */
    // };
  

    console.log('server listened')

    if(req.method=='POST' && req.url=='/add'){
        console.log('Add listened')
        //console.log(chunk)
        req.on("data",(chunk)=>{
            console.log(chunk.toString())
            let str=chunk.toString().split('&')
            let prod={
                product_name:str[0],
                price:parseInt(str[1]),
                quantity:parseInt(str[2])
            }
            prods.push(prod) 
            console.log('Product added')
        })
        res.end()
    }
    else if(req.method=='GET' && req.url=='/api'){
        console.log('GET listened')
        // head=headers
        // head.push({'Content-Type':'text/html'})
        // console.log(head)
        res.writeHead(200,{'Content-Type':'application/json'})
        //res.writeHead(200,head)
        res.write(JSON.stringify(prods))
        res.end()
    }
    else if(req.method=='DELETE' && req.url=='/del'){
        console.log('Del listened')
        req.on("data",(chunk)=>{
            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name==chunk.toString())
                prods.splice(i,1)
            }
        })
        console.log("Products deleted")
        res.end()
    }
    else if(req.method=='PATCH' && req.url=='/updt'){
        console.log('Update listened')
        req.on("data",(chunk)=>{

            console.log(chunk.toString())
            let str=chunk.toString().split('&')
            let product_name=str[0]
            let price=str[1]
            let quantity=str[2]


            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name==product_name)
                {
                    if(price!=null && price!='')
                    prods[i].price=price
                    if(quantity!=null && quantity!='')
                    prods[i].quantity=quantity
                }
            }
        })
        console.log('Products Updated')      
        res.end()
  
    }
    else if(req.method=='POST' && req.url=='/search'){
        let ans=[]
        
        console.log('Search listened')
        req.on("data",(chunk)=>{
            console.log(chunk.toString())
            for(let i=0;i<prods.length;i++){
                console.log('Product '+i)
                console.log(prods[i])
                console.log(prods[i].product_name)
                console.log(prods[i].product_name.indexOf(chunk.toString()))
                if(prods[i].product_name.indexOf(chunk.toString())==0)
                ans.push(prods[i])
            }

            console.log(ans)
            res.writeHead(200,{"Content-Type":"application/json"})
            res.write(JSON.stringify(ans))
            res.end()
    
        })
    }
    else if(req.method=='GET' && req.url=='/formreq'){
        console.log('Form listened')
        res.write(index)
        res.end()

    }
    else if(req.method=='GET' && req.url=='/'){
        console.log('Form listened')
        res.write(index)
        res.end()

    }
    else if(req.method=='POST' && req.url=='/checkProd'){
        let ans='0'
        req.on("data",(chunk)=>{
            console.log('in checkprod '+chunk.toString())
            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name==chunk.toString()){
                    ans='1'
                    break
                }
            }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(ans)
            res.end()
        })
        
    }
    
})
var fs = require('fs')
var index=''
fs.readFile('prodpage.html',function(err,data){
    index=data
    server.listen(5000,()=>{
        console.log('server started')
    })
})
