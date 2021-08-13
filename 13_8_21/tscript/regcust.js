var RegularCustomer = /** @class */ (function () {
    function RegularCustomer() {
        this.email = "peter@mail.com";
        this.name = "peter";
        this.address = "jojo villa";
    }
    RegularCustomer.prototype.dplay = function () {
        return "details are: " + this.name + " " + this.address + " " + this.email;
        throw new Error("Method not implemented.");
    };
    return RegularCustomer;
}());
console.log(new RegularCustomer().dplay());
