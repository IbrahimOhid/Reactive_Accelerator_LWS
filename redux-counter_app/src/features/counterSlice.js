const { createSlice } = ("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState : {count: 0},
    reducers: {
        increment: (state)=>{
            state.count = state.count + 1
        },
        decrement: (state)=>{
            state.count = state.count -1
        },
        reset: (state)=>{
            state.count = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.action;
export default counterSlice.reducers;