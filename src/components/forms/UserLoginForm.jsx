import css from './UserLoginForm.module.css';	
import { useState } from "react";
import lockLogin from '../../assets/lock-login.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate} from '../../store/actions';

const UserLoginForm = (props) => { 

    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // const [loginError, setLoginError] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const dispatch = useDispatch();
    
    //ввод логина в поле инпут
    function handleLoginChange(e) {
        setLogin(e.target.value);
        setButtonDisabled(!e.target.value || !password);
    }
    
    //ввод пароля в поле инпут
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        setButtonDisabled(!login || !e.target.value);
    }    

    //отправка формы
    const handleLogin = (e) => {
        e.preventDefault();
        //проверка правильности логина
        // const pattern = /^\d{10}$|^[\w]+/;
        // if (!pattern.test(login)) {
        //     setLoginError(true);
        // } else {
        //     setLoginError("");}
        dispatch(authenticate(login, password));
        navigate('/');
        
    };

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
                        {/* {loginError && (<div className={css.message}>Введите корректные данные</div>)} */}
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