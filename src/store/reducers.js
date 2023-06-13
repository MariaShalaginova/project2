import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from './actions.js';

let token  = localStorage.getItem('tokenInfo'); //получаем токен из локалстораджа 


let isExpireDate  = true;

if (token) {
    token = JSON.parse(token);
    const expireDate = token.expire; // сравниваем текущую дату с датой истечения токена
  
    if (new Date().toLocaleDateString() > new Date(expireDate).toLocaleDateString()) {
      localStorage.removeItem("tokenInfo"); // Удалить данные из localStorage     
    } else {
      isExpireDate = false;
    }
}        

const initialState = {
    token: token || null,
    isLoading: false,
    isAuthenticated: isExpireDate ? false : true,
    wrongPasswordOrLogin: ""
  };

const authReducer = (state = initialState, action) => {
    // const { type, payload } = action;
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case AUTH_SUCCESS:
      return { ...state, token: action.payload.token, isLoading: false, isAuthenticated: true };
    case AUTH_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false, wrongPasswordOrLogin: action.payload };
    case AUTH_LOGOUT:
      return { ...state,
        token: null,
        isAuthenticated: false};
    default:
      return state;
  }
};

export default authReducer;