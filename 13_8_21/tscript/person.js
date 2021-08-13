var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
var person = new Person("peter", "23 old street");
//can be person:Person also
console.log(person);
console.log(person.name);
console.log(person.address);
console.log(person.getAddress());
console.log(person.getName());
