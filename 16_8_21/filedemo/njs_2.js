var fs=require('fs')

//reading
console.log('File Data is:' )
fs.readFile('hello.txt','utf8',function(err,data){
    if(err)
        throw err
    console.log(data)
})

// file_fd=fs.open('hello.txt','a',function(err,fd){
//     if(err)
//         throw err
//     console.log(fd)
// })
// console.log(file_fd)
//appending

fs.appendFile('hello.txt','Hello from assignment',function(err,data){
    if(err)
        throw err
    console.log(data)
})

//writing
fs.writeFile('hello3.txt','new file',function(err,data){
    if(err)
        throw err
    console.log(data)
})