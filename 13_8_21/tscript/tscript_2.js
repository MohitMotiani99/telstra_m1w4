var Item = /** @class */ (function () {
    function Item(itemName, price, quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
    Item.prototype.getItemName = function () {
        return this.itemName;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getQuantity = function () {
        return this.quantity;
    };
    return Item;
}());
var item = new Item("book", 280.5, 100);
console.log(item);
console.log(item.getItemName());
console.log(item.getPrice());
console.log(item.getQuantity());
