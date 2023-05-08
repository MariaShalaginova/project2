import css from './UserLoginForm.module.css';	
import { useState } from "react";
import lockLogin from '../../assets/lock-login.svg'
import { useNavigate } from 'react-router-dom';

const UserLoginForm = (props) => { 

    const {setToken} = props;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();

    function handleLoginChange(e) {
        setLogin(e.target.value);
        setButtonDisabled(!e.target.value || !password);
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        setButtonDisabled(!login || !e.target.value);
    }    

    async function handleLogin(e) {
        const tokenInfo = await fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "login": login,
                "password": password
              })
          });

        const result = await tokenInfo.json(); 
        
        localStorage.setItem('tokenInfo', JSON.stringify(result));
        setToken(JSON.stringify(result));
        navigate('/')
        // const savedUser = JSON.parse(localStorage.getItem('user'));

        // let response2 = await fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
        //     method: 'GET',
        //     headers: {
        //       'Authorization': 'Bearer ' + result.accessToken
        //     } 
        
        //   });

        //   let result2 = await response2.json();
        // console.log(result);
        

    }



    return (
        
        <div className={css.container}>
            <div><img src={lockLogin} alt="lock"/></div>
            <div className={css.form}>
                <div className={css.buttons}>
                    <button type="button" className={css.loginButton}>Войти</button>
                    <button type="button" className={css.loginButton}>Зарегистрироваться</button>
                </div>
                <form  onSubmit={handleLogin}>
                    <div className={css.login}>
                        <label htmlFor="true" id="login">Логин или номер телефона:</label>
                        <input type="text" name="login" id="login" value={login} onChange={handleLoginChange}></input>
                    </div>
                    <div className={css.login}>
                        <label htmlFor="true" id="password">Пароль:</label>
                        <input type="password" name="password" id="password"  value={password} onChange={handlePasswordChange}></input>
                    </div>
                    <button type="button" onClick={handleLogin} disabled={buttonDisabled}>Войти</button>

                </form>
                <div className={css.restore}>
                   <p>Восстановить пароль</p>
                </div>
                <p>
                    Войти через:
                </p>
                <div className={css.searchButtons}>
                    <button type="button" className={css.google}></button>  
                    <button type="button" className={css.facebook}></button>
                    <button type="button" className={css.yandex}></button>  
                </div>
            </div>
        
        </div>

    )
}

export default UserLoginForm