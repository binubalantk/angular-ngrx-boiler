import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { MainComponent } from './components/main/main.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { GUIReducer } from './store/reducers/gui.reducer';
import { productReducer } from './store/reducers/product.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      products: productReducer,
      gui: GUIReducer
    })
  ],
  declarations: [MainComponent, ProductListComponent, ProductTileComponent],
  exports: [MainComponent]
})
export class ProductModule {}
