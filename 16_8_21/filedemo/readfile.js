var fs=require('fs')
// fs.readFile('hello.txt','utf8',function(err,data){
//     console.log(err)
//     console.log(data)
// })
// //without encoding we get byte array of ascii value
// //if error like wrong file name the err object stored in er
// fs.appendFile('hello.txt','Hello to file',function(err){
//     if(err)throw err
//     console.log(err)
// })
// fs.writeFile('hello1.txt','Hello to file',function(err){
//     if(err)throw err
// })

//err,file is a set parameter order error goes to err and output to 2nd param
fs.open('hello1.txt','r',function(err,file){
 fs.readFile(file,'utf8',(err,data)=>{
     console.log(data)
 })
})
//al these file ops are async ops
//sync funs only for debugging or checking

fs.writeFileSync('hello1.txt','data from sync ops',function(err){
    if(err)
        throw err
})