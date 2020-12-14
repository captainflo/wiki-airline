import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, EDIT_USER, FETCH_USER } from './types';

//////////////////////////////// Authentification //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Signup
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/signup`, formProps);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Signin
export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/signin`, formProps);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    dispatch({ type: AUTH_ERROR, payload: '' });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Signout
export const signout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
  dispatch({ type: FETCH_USER, payload: '' });
};

// fetch User
export const fetchUser = () => async (dispatch) => {
  const token = { token: localStorage.token };
  const res = await axios
    .post('/api/user', token)
    .then(
      async (response) => await axios.get(`/api/user/${response.data.sub}`)
    );
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Edit User
export const editUser = (id, formValues, callback) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_ERROR, payload: '' });
    const response = await axios.post(`/api/user/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Delete User
export const deleteUser = (id, callback) => async (dispatch) => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};

////////////////////////////////////////// Cloudinary ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// Cloudinary Delete Image
export const deleteImage = (image) => async () => {
  await axios.post(`/api/delete/image`, image);
};
