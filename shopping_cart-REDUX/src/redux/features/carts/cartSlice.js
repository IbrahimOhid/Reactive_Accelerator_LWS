import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "counts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        alert("Product Already Added!");
      } else {
        state.push({
          quantity: 1,
          ...action.payload,
        });
      }
    },
   incrementItem: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if(item.quantity === 5){
        alert("Only 5 Item Buy")
      }
      else if (item) {
        item.quantity += 1;
      }
    },
    decrementItem : (state, action)=>{
      const item = state.find((product) => product.id === action.payload.id);
      if(item.quantity === 1){
        alert("At list One Item Buy")
      }
      else if (item) {
        item.quantity -= 1;
      }
    }
    
  },
});

export const { addToCart, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
