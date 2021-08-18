var Data2 = /** @class */ (function () {
    function Data2(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
    Data2.prototype.get = function () {
        console.log({
            "value1": this.t1,
            "value2": this.t2,
            "type1": typeof (this.t1),
            "type2": typeof (this.t2)
        });
    };
    return Data2;
}());
var d2 = new Data2(23, "hey");
d2.get();
