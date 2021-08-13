/**
 * interface 
 *  is like a constract over a class,that class must conform to 
 * Interface can contain properties,methods ,events 
 */

interface Human{
    name:string,
    address:string,
    age:number

    display:()=>void
    //pure virtual func
    dplay():string;
}