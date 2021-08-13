import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, Products, ProductState } from '../../models/product.model';
import { ProductAddAction } from '../../store/actions/product.action';

@Component({
  selector: 'app-product-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent {
  title: string = 'Home';
  currentProduct: Product = { id: '', title: '', price: 0 };
  constructor(private productStore: Store<ProductState>) {}

  onAddProduct() {
    const product = {
      id: '_' + this.currentProduct.title,
      title: this.currentProduct.title,
      price: 0
    };
    this.productStore.dispatch(ProductAddAction({ product }));
    this.currentProduct.title = '';
  }
}
