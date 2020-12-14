import { AUTH_USER, AUTH_ERROR, EDIT_USER, FETCH_USER } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  user: '',
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload || false };
    case FETCH_USER:
      return { ...state, user: action.payload || false };
    case EDIT_USER:
      return { ...state, authenticated: action.payload || false };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default auth;
