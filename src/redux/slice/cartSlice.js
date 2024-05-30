import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorageHelper("cartItem") || [],
  subTotal: localStorageHelper("subTotal") || 0,
  tax: localStorageHelper("tax") || 0,
  taxRate: 18,
  total: localStorageHelper("total") || 0,
};

function cartLocalStorage(state) {
  localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
  localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
  localStorage.setItem("total", JSON.stringify(state.total));
  localStorage.setItem("tax", JSON.stringify(state.tax));
}

function localStorageHelper(str) {
  return JSON.parse(localStorage.getItem(str));
}

function setCartTotal(state) {
  // state.subTotal = state.cartItem.reduce((acc, v) => {
  //   return (acc += v.price * v.qty);
  // }, 0);
  // state.tax = state.subTotal * (state.taxRate / 100);
  // state.total = state.subTotal + state.tax;
  let tax = 0;
  let total = 0;
  let subTotal = 0;
  for (const product of state.cartItem) {
    subTotal += product.price * product.qty;
  }

  tax = Number(subTotal * (state.taxRate / 100).toFixed(2));
  total = subTotal + tax;

  state.subTotal = subTotal;
  state.tax = tax;
  state.total = total;

  cartLocalStorage(state);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state?.cartItem?.find((value) => {
          return value.id === action.payload.id;
        })
      ) {
        const newArray = state?.cartItem?.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, qty: value.qty + 1 };
          } else {
            return value;
          }
        });
        state.cartItem = newArray;
      } else {
        state?.cartItem?.push(action.payload);
      }
      setCartTotal(state);
    },
    removeFromCart: (state, action) => {
      const newArray = state.cartItem.filter((value) => {
        if (value.id === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      state.cartItem = newArray;
      setCartTotal(state);
    },
    increase: (state, action) => {
      const newArray = state.cartItem.map((value) => {
        if (value.id === action.payload) {
          return { ...value, qty: value.qty + 1 };
        } else {
          return value;
        }
      });
      state.cartItem = newArray;
      setCartTotal(state);
    },
    decrease: (state, action) => {
      const newArray = state.cartItem
        .map((value) => {
          if (value.id === action.payload) {
            if (value.qty > 1) {
              return { ...value, qty: value.qty - 1 };
            } else {
              return null;
            }
          } else {
            return value;
          }
        })
        .filter((value) => {
          if (value !== null) {
            return true;
          }
          return false;
        });
      state.cartItem = newArray;
      setCartTotal(state);
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
