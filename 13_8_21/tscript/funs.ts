var mycalc=function(a:number,b:number):number{
    return a+b;
}

function mycalc2(a:number,b:number){
    return a+b
}
console.log(mycalc(12,23))
console.log(mycalc2(23,34))

var calc=function(a:any,b:number){
    return a+b
}

console.log(calc(12,45))
console.log(12,"hello")

var calc2=function(...mydata){
    console.log(mydata)
}
calc2(12,"Hello",56)
