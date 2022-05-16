import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface cartState {
  value: string[];
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const {addCart, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
