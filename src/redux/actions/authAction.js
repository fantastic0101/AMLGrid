import { serverUrl } from '../../utils/url';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';
import { message } from 'antd';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await fetch(`${serverUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        message.error('Login failed.');
      }

      const data = await response.json();
      const token = data.token;
      dispatch(loginSuccess(token));
      message.success('Login Success');
    } catch (error) {
      message.error(error.message);
      //   dispatch(loginFailure(error.message));
    }
  };
};

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: '',
});

export const register = (name, email, password) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      const response = await fetch(`${serverUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      dispatch(registerSuccess(data));
      message.success('User registered successfully.')
    } catch (error) {
      message.error(error.message);
      dispatch(registerFailure(error.message));
    }
  };
};
