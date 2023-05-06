import React from "react";
import css from './UserLogin.module.css'
// import { Link } from 'react-router-dom'
// import { Route, Routes } from "react-router-dom";
// import UserPage from "../user-login-page/UserPage";
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const navigate = useNavigate();
    return (
        <div className={css.userMenu}>
            <a href="#">Зарегистрироваться</a>
      
            <div className={css.line}>&#10072;</div>
            
                <button type="button" className={css.userButton} onClick={async event => {navigate('/login')}}>Войти</button>
                {/* <Link to='/login'>Войти</Link></button> */}
            
        </div>
    )
}

export default UserLogin