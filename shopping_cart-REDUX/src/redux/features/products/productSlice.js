import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: crypto.randomUUID(),
  //   image:
  //     "https://assets.prebuiltui.com/images/components/card/card-lamp-image.png",
  //   name: "Cylindrical Modern Table Lamp",
  //   price: "$29.00",
  //   category: "Light",
  // },
  // {
  //   image:
  //     "https://assets.prebuiltui.com/images/components/card/card-watch-image.png",
  //   name: "Modern Smart Watch for Men/women",
  //   price: "$48.00",
  //   category: "Watch",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   image:
  //     "https://assets.prebuiltui.com/images/components/card/card-bag-image.png",
  //   name: "Luxury and modern ladies bag",
  //   price: "$24.00",
  //   category: "Bag",
  // },
  // {
  //   id: crypto.randomUUID(),
  //   image:
  //     "https://assets.prebuiltui.com/images/components/card/card-speaker-image.png",
  //   name: "Modern Smart AI Speaker",
  //   price: "$29.00",
  //   category: "Speaker",
  // },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
