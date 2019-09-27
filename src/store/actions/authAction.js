import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_START = 'REGISTER_START ';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// login actions
export const login = (credentials, history) => dispatch => {
  dispatch({ type: LOGIN_START })
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      // set token to local storage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      localStorage.setItem('username', res.data.username);
      // route to dashboard
      history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response })
      console.log('authFailure', err.response)
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('username');
}

// sign up actions
export const register = (user, history) => dispatch => {
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS })
      history.push('/login');
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response })
    })
} 