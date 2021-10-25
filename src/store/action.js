export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const SET_REGISTER_AUTH = 'SET_REGISTER_AUTH';
export const FETCH_API = 'FETCH_API';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_SINGLE_API = 'FETCH_SINGLE_API';
export const FETCH_SINGLE_API_SUCCESS = 'FETCH_SINGLE_API_SUCCESS';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ORDER = 'ORDER';

export const registerUser = user => ({
  type: REGISTER_USER,
  user,
});

export const registerUserSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFail = register => ({
  type: REGISTER_USER_FAIL,
  payload: { register },
});

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const loginUserFail = (email, password) => ({
  type: LOGIN_USER_FAIL,
  payload: {
    email,
    password,
  },
});

export const setRegisterAuth = payload => ({
  type: SET_REGISTER_AUTH,
  payload,
});

export const fetchApi = payload => ({
  type: FETCH_API,
  payload,
});

export const fetchApiSuccess = payload => ({
  type: FETCH_API_SUCCESS,
  payload,
});

export const fetchSingleApi = payload => ({
  type: FETCH_SINGLE_API,
  payload,
});

export const fetchSingleApiSuccess = payload => ({
  type: FETCH_SINGLE_API_SUCCESS,
  payload,
});

export const currentPage = payload => ({
  type: CURRENT_PAGE,
  payload,
});

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

export const increment = payload => ({
  type: INCREMENT,
  payload,
});

export const decrement = payload => ({
  type: DECREMENT,
  payload,
});

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload,
});

export const order = payload => ({
  type: ORDER,
  payload,
});
