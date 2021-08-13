var Duck = /** @class */ (function () {
    function Duck() {
        this.sound = "Quack";
    }
    return Duck;
}());
var Cow = /** @class */ (function () {
    function Cow() {
        this.sound = "Moo";
    }
    return Cow;
}());
var Lio = /** @class */ (function () {
    function Lio() {
        this.sound = "Roar";
    }
    return Lio;
}());
var animal = new Duck();
var bird = new Cow();
var bovine = new Lio();
console.log(animal.sound);
console.log(bird.sound);
console.log(bovine.sound);
