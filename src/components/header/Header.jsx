import React, { useState } from "react";
import css from './Header.module.css'
import logo from '../../assets/logo.svg'
import Headermenu from '../headermenu/Headermenu'
import UserLogin from '../user-login/UserLogin'
import LimitCompanies from '../limit-companies/LimitCompanies'
import UserAvatar from '../user-avatar/UserAvatar'
import MobileMenu from "../mobile-menu/MobileMenu";
import { useSelector } from "react-redux";

function Header(props) {  
    const [isOpen, setIsOpen] = useState(false);
    //получаем состояние isAuthenticated с помощью хука useSelector и рендерим нужный контент в зависимости от состояния.
    let { isAuthenticated } = useSelector((state) => state.auth);  

    let token  = localStorage.getItem('tokenInfo'); //получаем токен из локалстораджа 

    if(token){
        token = JSON.parse(token);
    }

    //функция изменения состояния мобильного меню
    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={css.header}>

            <div>
                <img src={logo} alt="logo" />
            </div>

            {isOpen && (<MobileMenu />)}
            
            <Headermenu />
                
            {!isAuthenticated && (
                <UserLogin /> 
            )}    
                
            {isAuthenticated && (<>
                <LimitCompanies token={token}/>
                <UserAvatar />
                </>
            )}
               
            <div className={css.gamburger}>
                <button type="button" className={css.toggle} onClick={handleToggleClick}>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                </button>      
            </div>

        </header>
    )
}

export default Header