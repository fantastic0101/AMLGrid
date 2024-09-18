import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: localStorage.getItem('token') || null, // Preload token from localStorage
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        loading: false,
        token: null,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default authReducer;