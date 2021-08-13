// var myfun=()=>{
//     console.log('hello world')
// }
// myfun()


var calcme=function(callme){
    callme(12,23)
}

//calcme here is accessible to every file in this folder
//so if u redeifine it ,it will give error
calcme((a,b)=>{
    console.log(a)
    console.log(b)
})