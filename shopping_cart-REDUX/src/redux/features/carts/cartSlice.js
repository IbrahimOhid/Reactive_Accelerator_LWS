import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "counts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((product)=> product.id === action.payload.id);
      if(existingProduct){
        alert("Product Already Added!")
      }else{
        state.push({
            id: crypto.randomUUID(),
            ...action.payload
        })
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
