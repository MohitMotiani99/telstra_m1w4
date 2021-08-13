var mycalc = function (a, b) {
    return a + b;
};
function mycalc2(a, b) {
    return a + b;
}
console.log(mycalc(12, 23));
console.log(mycalc2(23, 34));
var calc = function (a, b) {
    return a + b;
};
console.log(calc(12, 45));
console.log(12, "hello");
var calc2 = function () {
    var mydata = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mydata[_i] = arguments[_i];
    }
    console.log(mydata);
};
calc2(12, "Hello", 56);
