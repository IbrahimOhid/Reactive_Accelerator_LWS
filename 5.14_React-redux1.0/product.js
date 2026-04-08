// state => initialState
// action => getProduct, addProduct
// reducer
// store

const { createStore, combineReducers } = require("@reduxjs/toolkit");

// product Constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart Constants
const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//initial product state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};
//initial cart stat
const initialCartState = {
  cart: ["banana"],
  numberOfCartItem: 1,
};

// get Product
const getProductAction = () => {
  return {
    type: GET_PRODUCT,
  };
};
// add product
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// get cart
const getCart = () => {
  return {
    type: GET_CART_ITEM,
  };
};
// add cart
const addCart = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

// productsReducer
const productsReducers = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

// cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberOfCartItem: state.numberOfCartItem + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productsReducers,
  cartR: cartReducer,
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProductAction());
store.dispatch(addProductAction("Orange"));

store.dispatch(getCart());
store.dispatch(addCart("Potato"));

// product store
// const store = createStore(productsReducers)
// store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch(getProductAction())
// store.dispatch(addProductAction('Orange'))

// cart store
// const store = createStore(cartReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(getCart());
// store.dispatch(addCart("Potato"));
