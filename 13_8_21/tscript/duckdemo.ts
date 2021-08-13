class Duck{
    sound:string="Quack"
}
class Cow{
    sound:string="Moo"
}
class Lio{
    sound:string="Roar"
}

var animal:Lio=new Duck()
var bird:Duck=new Cow()
var bovine:Cow=new Lio()
console.log(animal.sound)
console.log(bird.sound)
console.log(bovine.sound)