import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export enum GUIAction {
  SELECT_PRODUCT = '[GUI] Select Product',
  UNSET_PRODUCT = '[GUI] Unset Product'
}

export const GUIProductSelectAction = createAction(
  GUIAction.SELECT_PRODUCT,
  props<{ product: Product }>()
);

export const GUIUnsetProductAction = createAction(GUIAction.UNSET_PRODUCT);
