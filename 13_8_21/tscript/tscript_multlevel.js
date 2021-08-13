var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.drawshape = function () {
        console.log('shape is drawn');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.drawshape = function () {
        console.log('circle is drawn');
    };
    return Circle;
}(Shape));
var Quad = /** @class */ (function (_super) {
    __extends(Quad, _super);
    function Quad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quad.prototype.drawshape = function () {
        console.log('quad is drawn');
    };
    return Quad;
}(Shape));
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rect.prototype.drawshape = function () {
        console.log('rect drawn');
    };
    return Rect;
}(Quad));
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return square;
}(Rect));
var s = new Shape();
s.drawshape();
s = new Circle();
s.drawshape();
s = new Quad();
s.drawshape();
s = new Rect();
s.drawshape();
s = new square();
s.drawshape();
