"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
        this.pageTitle = "Order Details";
        this.myHead = true;
        /*orders:boolean=true;*/
        this.imageWidth = 50;
        this.showImages = false;
        this.orders = [
            {
                "orderId": 1,
                "productName": "Leaf Rake",
                "customerName": "Ganesh",
                "deliveryDate": "Nov 19, 2017",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "orderId": 2,
                "productName": "Garden Cart",
                "customerName": "Mylsamy",
                "deliveryDate": "Nov 18, 2017",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "orderId": 5,
                "productName": "Hammer",
                "customerName": "Netra",
                "deliveryDate": "Oct 21, 2018",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
        ];
    }
    OrderListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'gom-order',
            templateUrl: 'app/orders/order-list.component.html',
            //styles:['thead{color:green}','td{color:blue}']
            styleUrls: ['app/orders/order-list.component.css']
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map