"use strict";
exports.__esModule = true;
exports.nsp = void 0;
var nsp;
(function (nsp) {
    var discount = /** @class */ (function () {
        function discount(markedp, disc) {
            this.markedp = markedp;
            this.disc = disc;
        }
        discount.prototype.calcprice = function () {
            return this.markedp - this.disc;
        };
        return discount;
    }());
    nsp.discount = discount;
    var triangle = /** @class */ (function () {
        function triangle(base, ht) {
            this.base = base;
            this.ht = ht;
        }
        triangle.prototype.area = function () {
            return 0.5 * this.base * this.ht;
        };
        return triangle;
    }());
    nsp.triangle = triangle;
})(nsp = exports.nsp || (exports.nsp = {}));
