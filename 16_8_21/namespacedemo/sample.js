"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var calculator;
(function (calculator) {
    var intrest;
    (function (intrest) {
        function getintrest() {
            console.log('calculating intrest');
        }
        intrest.getintrest = getintrest;
    })(intrest = calculator.intrest || (calculator.intrest = {}));
    var MyCalculator = /** @class */ (function () {
        function MyCalculator() {
        }
        MyCalculator.prototype.calculate = function () {
            console.log('calculating..');
        };
        return MyCalculator;
    }());
    calculator.MyCalculator = MyCalculator;
})(calculator = exports.calculator || (exports.calculator = {}));
