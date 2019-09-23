import {
  LOGIN_START,
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS, 
  REGISTER_FAILURE
} from '../actions/authAction';

const initialState = {
  error: '',
  isLoading: false,
  isAuth: localStorage.getItem('token') ? true : false,
};

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case LOGOUT:
      return {
        ...state,
        error: '',
        isLoading: false,
        isAuth: false,
      }
    case REGISTER_START:
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default authReducer;