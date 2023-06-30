export const AUTH_REQUEST= 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const loginUrl = 'https://gateway.scan-interfax.ru/api/v1/account/login';

export const logout = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
  localStorage.removeItem('tokenInfo');
};


export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  payload: {token},
});

export const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authenticate = (login, password) => async (dispatch) => {
 
  try {

      dispatch({ type: AUTH_REQUEST });

      const tokenInfo = await fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "login": login,
              "password": password
            }),
        });

      if(tokenInfo.status ===  401){
        let message = 'Неправильный логин или пароль';
        dispatch({ type: AUTH_FAILURE, payload: message });
        localStorage.removeItem('tokenInfo');
      }

      if(tokenInfo.status ===  200){
        const result = await tokenInfo.json();

        localStorage.setItem('tokenInfo', JSON.stringify(result));
    
        dispatch(authSuccess(result));
      } 

    } catch (error) {
      dispatch({ type: AUTH_FAILURE, payload: error.message});
      localStorage.removeItem('tokenInfo');
    }   
        
  };

