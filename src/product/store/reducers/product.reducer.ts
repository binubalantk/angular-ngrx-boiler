import { createReducer, on } from '@ngrx/store';
import { Products } from '../../models/product.model';
import { ProductAddAction } from '../actions/product.action';

const initialState: Products = [];

export const productReducer = createReducer<Products>(
  initialState,
  on(ProductAddAction, (state, { product }) => [...state, product])
);
