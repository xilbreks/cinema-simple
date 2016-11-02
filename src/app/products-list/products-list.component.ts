import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'app-products-list',
  outputs: ['onProductSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }
  clicked(product:Product){
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product:Product){
    return product===this.currentProduct;
  }
}
