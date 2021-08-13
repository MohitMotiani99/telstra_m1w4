class Person{
    private name:string
    address:string

    constructor(name:string,address:string){
        this.name=name
        this.address=address
    }
    public getName():string{
        return this.name;
    }
    public getAddress():string{
        return this.address;
    }
}



var person = new Person("peter","23 old street")
//can be person:Person also
console.log(person)
console.log(person.name)
console.log(person.address)

console.log(person.getAddress())
console.log(person.getName())