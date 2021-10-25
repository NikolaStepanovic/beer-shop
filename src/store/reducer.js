import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  SET_REGISTER_AUTH,
  FETCH_API,
  FETCH_API_SUCCESS,
  FETCH_SINGLE_API,
  FETCH_SINGLE_API_SUCCESS,
  CURRENT_PAGE,
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_ITEM,
  ORDER,
} from './action';

const initialState = {
  registerAuth: false,
  error: {},
  apiData: [],
  singleApiData: [],
  currentPage: 1,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerAuth: action.payload,
      };
    case SET_REGISTER_AUTH:
      return {
        ...state,
        registerAuth: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_USER:
      return { ...state };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_API:
      return { ...state };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        apiData: action.payload,
      };
    case FETCH_SINGLE_API:
      return { ...state };
    case FETCH_SINGLE_API_SUCCESS:
      return {
        ...state,
        singleApiData: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case INCREMENT:
      const counter = state.cart.filter(el => {
        if (el.id === action.payload)
          return (
            (el.value += 1),
            (el.totalPrice = el.totalPrice + el.price)
          );
      });
      return {
        ...state,
        cart: [...state.cart, counter],
      };

    case DECREMENT:
      const decrement = state.cart.filter(el => {
        if (el.id === action.payload)
          return (
            el.value > 1 ? (el.value -= 1) : 1,
            el.totalPrice > el.price
              ? (el.totalPrice = el.totalPrice - el.price)
              : 0
          );
      });
      return {
        ...state,
        cart: [...state.cart, decrement],
      };

    case REMOVE_ITEM:
      const removeItem = state.cart.filter(el => {
        return el.id !== action.payload;
      });
      return {
        ...state,
        cart: removeItem,
      };

    case ORDER:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
