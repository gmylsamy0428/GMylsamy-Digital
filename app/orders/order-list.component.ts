import {Component} from '@angular/core';

@Component ({
    selector: 'gom-order',
    templateUrl:'app/orders/order-list.component.html',
    //styles:['thead{color:green}','td{color:blue}']
    styleUrls:['app/orders/order-list.component.css']

})

export class OrderListComponent{
    pageTitle:string="Order Details"
    myHead:boolean=true;
    /*orders:boolean=true;*/
    imageWidth:number=50;
    showImages:boolean=false;
    orders:any[]=[
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
    ]
    toggleImage():void{
        this.showImages = !this.showImages;
    }
}