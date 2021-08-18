var request = require('request')

function sendrequest(){
    request.get({
        header:{'content-type':'application/json'},
        url:'http://localhost:8089/items',
    },(err,response)=>{
        console.log(response.body)
    })
}

sendrequest()