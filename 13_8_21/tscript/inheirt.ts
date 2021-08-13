class Person2{
    name:string
    address:string
    protected age:number

    constructor(name:string,address:string){
        this.name=name
        this.address=address
    }
}
class Employee extends Person2{

    private salary:number

    constructor(name:string,address:string,salary:number,age:number){
        super(name,address)
        this.age=age
        this.salary=salary
    }


    printname():string{
        return this.name
    }
}

var e =new Employee('peter','23 old street',20000,22)
console.log(e)
console.log(e.name)
console.log(e.printname())