var http=require('http')
var prods=[
    {
        product_name:"tea",
        price:400,
        quantity:10
    }
]
var server = http.createServer((req,res)=>{
    console.log('server created')
    if(req.method=='GET' && req.url=='/api'){
        res.write(JSON.stringify(prods))
        res.write('Got all products')
    }
    else if(req.method=='POST' && req.url=='/api/addprod'){
        req.on("data",(chunk)=>{
            prods.push(JSON.parse(chunk))
        })
        res.write('Product Added')
    }
    else if(req.method=='DELETE' && req.url.match(/\/api\/delprod\/([a-zA-Z]+)/)){
        var id_name=req.url.split('/')[3]
        for(var i=0;i<prods.length;i++){
            if(prods[i]!=null && prods[i].product_name==id_name){
                prods.splice(i,1)
            }
        }
        res.write('Prod Deleted')
    }
    else if(req.method=='PATCH' && req.url=='/api/updtpr'){
        req.on("data",(chunk)=>{
            var obj=JSON.parse(chunk)
            console.log(obj)
            for(var i=0;i<prods.length;i++){
                if(prods[i]!=null && prods[i].product_name==obj.product_name)
                    prods[i].price=obj.price
            }
        })
        res.write('Updated Product')
    }
    res.end()
})
server.listen(5055)