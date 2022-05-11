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
  },
});

export const {addCart} = cartSlice.actions;

export default cartSlice.reducer;
