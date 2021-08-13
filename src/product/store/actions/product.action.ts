import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';
export enum ProductStoreAction {
  LIST_PRODUCT = '[Product] List product',
  ADD_PRODUCT = '[Product] Add product',
  REMOVE_PRODUCT = '[Product] Remove product'
}

export const ProductListAction = createAction(ProductStoreAction.LIST_PRODUCT);
export const ProductAddAction = createAction(
  ProductStoreAction.ADD_PRODUCT,
  props<{ product: Product }>()
);
export const ProductRemoveAction = createAction(
  ProductStoreAction.REMOVE_PRODUCT,
  props<{ productId: number }>()
);
