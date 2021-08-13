"use strict";
exports.__esModule = true;
var SimpleInterset = /** @class */ (function () {
    function SimpleInterset(amount, rate, time) {
        this.amount = amount;
        this.rate = rate;
        this.time = time;
    }
    SimpleInterset.prototype.calcInterest = function () {
        return (this.amount * this.rate * this.time / 100);
        //throw new Error("Method not implemented.");
    };
    return SimpleInterset;
}());
console.log('creating si object');
var si = new SimpleInterset(1000, 5, 2.2);
console.log('Simple Interset is: ' + si.calcInterest());
