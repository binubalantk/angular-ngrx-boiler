import { createReducer, on } from '@ngrx/store';
import { GUIState } from '../../models/product.model';
import {
  GUIProductSelectAction,
  GUIUnsetProductAction
} from '../actions/gui.action';

const initialState: GUIState = {
  selectedProduct: undefined
};

export const GUIReducer = createReducer(
  initialState,
  on(GUIProductSelectAction, (state, { product }) => ({
    ...state,
    selectedProduct: product
  })),
  on(GUIUnsetProductAction, state => ({ ...state, selectedProduct: undefined }))
);
