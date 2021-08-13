var myappname;
(function (myappname) {
    var MyMessage = /** @class */ (function () {
        function MyMessage() {
        }
        MyMessage.prototype.printmessage = function () {
            console.log('hello world');
        };
        return MyMessage;
    }());
    myappname.MyMessage = MyMessage;
})(myappname || (myappname = {}));
