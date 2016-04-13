/**
 * Created by linyuebin on 2016/4/7.
 */

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
  selector: 'app',
  templateUrl: 'product.html'
})

class Product {
  sku:string;
  name:string;
  imageUrl:string;
  department:string[];
  price:number;

  constructor(sku:string, name:string, imageUrl:string, department:string[], price:number) {
    this.sku = sku;
    this.name = name;
    this.imageUrl = imageUrl;
    this.department = department;
    this.price = price;
  }
}

class InventoryApp {
   product:Product;

   constructor() {
     this.product = new Product(
       'NICEHAT', 'A Nice Black Hat',
       '/resources/images/products/black-hat.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99);
   }
 }

bootstrap(InventoryApp);
