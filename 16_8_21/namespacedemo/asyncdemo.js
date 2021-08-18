async function getMessage()
    return await "Message"
}
var m=getMessage()
console.log(m)
m.then((data)=>{
    console.log(data)
    console.log(m)
}).catch((reject)=>{
    console.log('error')
    console.log(reject)
    console.log(m)
})
//