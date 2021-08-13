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
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    Ticket.prototype.printdetails = function () {
        console.log('printing ticket details');
    };
    return Ticket;
}());
var WaitingTicket = /** @class */ (function (_super) {
    __extends(WaitingTicket, _super);
    function WaitingTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaitingTicket.prototype.printdetails = function () {
        console.log('waiting ticket details');
    };
    return WaitingTicket;
}(Ticket));
var ConfirmedTicket = /** @class */ (function (_super) {
    __extends(ConfirmedTicket, _super);
    function ConfirmedTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmedTicket.prototype.printdetails = function () {
        console.log('confirmed ticket details');
    };
    return ConfirmedTicket;
}(Ticket));
var CancelledTicket = /** @class */ (function (_super) {
    __extends(CancelledTicket, _super);
    function CancelledTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CancelledTicket;
}(ConfirmedTicket));
var t = new CancelledTicket();
t.printdetails();
