import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
  },
});
