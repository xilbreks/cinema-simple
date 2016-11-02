import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private products: Product[];
  constructor(){
    this.products = [
      new Product('WINTER','Shoes','./assets/images/products/black-hat.jpg',['a','b','c'],199),
      new Product('SUMMER','Sun Glases','./assets/images/products/black-shoes.jpg',['f','g','c'],59),
      new Product('WINTER','Gloves','./assets/images/products/blue-jacket.jpg',['a','b','c'],349)
    ];
  }
  productWasSelected(product:Product){
    console.log('product was selected = ',product);
  }
}
