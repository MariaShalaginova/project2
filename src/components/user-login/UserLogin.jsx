import React from "react";
import css from './UserLogin.module.css'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const navigate = useNavigate();
        return (
            <div className={css.userMenu}>

                <a href="https://gptgo.ai">Зарегистрироваться</a>
        
                <div className={css.line}>&#10072;</div>
                
                <button type="button" className={css.userButton} onClick={async event => {navigate('/login')}}>Войти</button>
                
            </div>
    )
}

export default UserLogin