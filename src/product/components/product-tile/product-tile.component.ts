import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  GUIState,
  Product,
  Products,
  ProductState
} from '../../models/product.model';
import { GUIProductSelectAction } from '../../store/actions/gui.action';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  products: Observable<Products>;
  constructor(private productStore: Store<ProductState>) {
    this.products = productStore.select('products');
  }

  ngOnInit() {}

  onTileSelect(product: Product) {
    this.productStore.dispatch(GUIProductSelectAction({ product }));
  }
}
