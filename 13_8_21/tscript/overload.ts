/**
 * prototype of overloaded parameters a func with any type parameter
 * logic for option parameters
 */

function calculate_total(num1:number,num2:number)
function calculate_total(num1:number,num2:number,num3?:number)
function calculate_total(num1:number,message:string);
function calculate_total(a:any,b:any,c?:any){
    var result:number=a+b
    if(c!=null){
        result+=c
    }

    console.log(result)
}
//common imple can use typeof operator to check types
calculate_total(100,200)
calculate_total(100,"hello")
calculate_total(true,100)
calculate_total(200,300,400)
calculate_total(200,300,"hello")