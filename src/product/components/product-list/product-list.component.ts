import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  GUIState,
  Product,
  Products,
  ProductState
} from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Products>;
  selectedProduct?: Product;
  constructor(private productStore: Store<ProductState>) {
    this.products = productStore.select('products');
    productStore.select('gui').subscribe(({ selectedProduct }) => {
      this.selectedProduct = selectedProduct;
    });
  }

  ngOnInit() {}
}
