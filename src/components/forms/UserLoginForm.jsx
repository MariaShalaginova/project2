import css from './UserLoginForm.module.css';	
import { useState } from "react";
import lockLogin from '../../assets/lock-login.svg'
import { useNavigate } from 'react-router-dom';

const UserLoginForm = (props) => { 

    const {setToken} = props;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // const [error, setError] = useState('');
    const navigate = useNavigate();

    // const pattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*(\+[1-9]\d{1,14}|[0-9]{7,14})?$/;
    // const pattern =  /^[a-z0-9_-]{3,16}$/
    function handleLoginChange(e) {
        setLogin(e.target.value);
        setButtonDisabled(!e.target.value || !password);
        // if (!login) {
        //     setError('Введите корректные данные')
        // }
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
                        <label htmlFor="login" id="login">Логин или номер телефона:</label>
                        <input type="text" name="login" id="login" value={login} onChange={handleLoginChange}></input>
                        {/* {pattern.test(login) && (<div className={css.message}>Введите корректные данные</div>)} */}
                    </div>
                    <div className={css.login}>
                        <label htmlFor="password" id="password">Пароль:</label>
                        <input type="password" name="password" id="password"  value={password} onChange={handlePasswordChange}></input>
                        {!password && (<div className={css.message}>Неправильный пароль</div>)}
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