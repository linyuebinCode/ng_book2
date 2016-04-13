/**
 * Created by linyuebin on 2016/4/7.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var browser_1 = require("angular2/platform/browser");
var Product = (function () {
    function Product(sku, name, imageUrl, department, price) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
    }
    Product = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'product.html'
        })
    ], Product);
    return Product;
})();
var InventoryApp = (function () {
    function InventoryApp() {
        this.product = new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99);
    }
    return InventoryApp;
})();
browser_1.bootstrap(InventoryApp);
//# sourceMappingURL=product.js.map