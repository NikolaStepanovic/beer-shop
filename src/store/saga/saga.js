import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REGISTER_USER,
  registerUserSuccess,
  registerUserFail,
  LOGIN_USER,
  loginUserFail,
  setRegisterAuth,
  FETCH_API,
  fetchApiSuccess,
  FETCH_SINGLE_API,
  fetchSingleApiSuccess,
} from '../action';
import axios from 'axios';

const FETCH_API_DATA = id => {
  return axios.get(
    `https://api.punkapi.com/v2/beers?page=${id}&per_page=10`
  );
};

const FETCH_SINGLE_API_DATA = id => {
  if (id) return axios.get(`https://api.punkapi.com/v2/beers/${id}`);
};

const API_REGISTER = async users => {
  const response = await axios.post(
    'https://auth-backend-api.herokuapp.com/api/users/register',
    users
  );

  return response.data;
};

const API_LOGIN = async user => {
  const response = await axios.post(
    'https://auth-backend-api.herokuapp.com/api/users/login',
    user
  );
  return response;
};

function* fetchData({ payload }) {
  try {
    const response = yield call(FETCH_API_DATA, payload);
    yield put(fetchApiSuccess(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

function* fetchSingleData({ payload }) {
  try {
    const response = yield call(FETCH_SINGLE_API_DATA, payload);
    yield put(fetchSingleApiSuccess(...response.data));
  } catch (e) {
    console.log(e.message);
  }
}

function* loginUsers({ user }) {
  try {
    const response = yield call(API_LOGIN, user);
    const token = response.data.token;
    yield localStorage.setItem('token', token);

    yield put(setRegisterAuth(false));
  } catch (e) {
    yield put(
      loginUserFail(e.response.data.email, e.response.data.password)
    );
  }
}

function* registerUsers({ user }) {
  try {
    yield call(API_REGISTER, user);
    yield put(registerUserSuccess(true));
  } catch (e) {
    yield put(registerUserFail(e.response.data.email));
  }
}

function* userSaga() {
  yield takeLatest(FETCH_API, fetchData);
  yield takeLatest(FETCH_SINGLE_API, fetchSingleData);
  yield takeLatest(LOGIN_USER, loginUsers);
  yield takeLatest(REGISTER_USER, registerUsers);
}

export default userSaga;
