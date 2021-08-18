function getData(a) {
    return a;
}
var a = getData('Hello World');
console.log(a);
var b = getData('hello');
//gives error as b is number
console.log(b);
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.getData = function () {
        return this.t;
    };
    Data.prototype.setData = function (t) {
        this.t = t;
    };
    return Data;
}());
var d = new Data();
d.setData(100);
console.log(d.getData());
var d = new Data();
d.setData("hey");
console.log(d.getData());
