export interface Product {
  id: string;
  title: string;
  price: number;
}

export type Products = Product[];

export interface GUIState {
  selectedProduct?: Product;
}

export interface ProductState {
  products: Products;
  gui: GUIState;
}
