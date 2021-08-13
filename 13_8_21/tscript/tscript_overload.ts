function printmsg(msg1:string)
function printmsg(msg1:string,msg2:string,msg3?:string)
function printmsg(val:boolean,msg:string)
function printmsg(a:any,b?:any,c?:any){
    if(typeof(a)=='string'){
        if(b==null){
            console.log('fun 1 implemented')
        }
        else{
            console.log('fun 2 implemeted')
        }
    }
    else if(typeof(a)=='boolean'){
        console.log('fun 3 implemented')
    }
}
//this one is not an overload it just defined the above overload

printmsg("hello","world","morning")
printmsg("hello","world")
printmsg('hello')
printmsg(true,"hello")