import { Interest } from "./Interest";

class SimpleInterset implements Interest{
    amount: number;
    rate: number;
    time: number;
    constructor(amount:number,rate:number,time:number){
        this.amount=amount
        this.rate=rate
        this.time=time
    }
    calcInterest(): number {
        
        return (this.amount*this.rate*this.time/100)
        
        //throw new Error("Method not implemented.");
    }

}
console.log('creating si object')
var si=new SimpleInterset(1000,5,2.2)
console.log('Simple Interset is: '+si.calcInterest())