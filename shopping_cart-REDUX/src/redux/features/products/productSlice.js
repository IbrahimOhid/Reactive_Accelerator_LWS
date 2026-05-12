import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: crypto.randomUUID(),
        img: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        name: "Women Bag",
        price: 120,
        category: 'Bag',
    },
     {
        id: crypto.randomUUID(),
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        name: "Smart Shoe",
        price: 100,
        category: 'Shoe',
    },
    {
        id: crypto.randomUUID(),
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        name: "Ear Phone",
        price: 140,
        category: 'Gadget',
    }
]

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProduct : (state, action)=>{
            state.push(action.payload)
        }
    }
    
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;