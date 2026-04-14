// state
// action => increment, decrement, reset
// reducers
// store

import { createStore } from "@reduxjs/toolkit"

// constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// initial state
const initialCounter = {
    count: 0
}

// action
export const incrementAction = ()=>{
    return{
        type: INCREMENT
    }
}

export const decrementAction = ()=>{
    return{
        type: DECREMENT
    }
}

export const resetAction = ()=>{
    return{
        type: RESET
    }
}

// reducer
const counterReducers = (state = initialCounter, action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
              case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
              case RESET:
            return{
                ...state,
                count: 0
            }
    
        default:
            return state
    }
}

// store
export const store = createStore(counterReducers)