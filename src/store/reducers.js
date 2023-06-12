import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from './actions.js';

// const initialState = {
//   token: '',
//   isLoading: false,
//   error: null,
// };

const initialState = {
    token: null,
    isLoading: false,
    isAuthenticated: false,
  };

const authReducer = (state = initialState, action) => {
    // const { type, payload } = action;
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case AUTH_SUCCESS:
      return { ...state, token: action.payload.token, isLoading: false, isAuthenticated: true };
    case AUTH_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false };
    case AUTH_LOGOUT:
      return { ...state,
        token: null,
        isAuthenticated: false};
    default:
      return state;
  }
};

export default authReducer;