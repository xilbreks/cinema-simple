import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductDepartmentComponent } from '../product-department/product-department.component';
import { PriceDisplayComponent } from '../price-display/price-display.component';

@Component({
  selector: 'app-product-row',
  host: {class:'item'},
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product:Product;
  constructor() { }

  ngOnInit() {
  }

}
