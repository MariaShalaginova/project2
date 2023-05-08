import React, { useState } from "react";
import css from './Header.module.css'
import logo from '../../assets/logo.svg'
import Headermenu from '../headermenu/Headermenu'
import UserLogin from '../user-login/UserLogin'
import LimitCompanies from '../limit-companies/LimitCompanies'
import UserAvatar from '../user-avatar/UserAvatar'
// import Loader from '../loader/Loader'
import MobileMenu from "../mobile-menu/MobileMenu";
// import { Route, Routes} from 'react-router-dom';
// import UserPage from '../user-login-page/UserPage'


function Header(props) {  
    
    //const {token} = props;

    let token  = localStorage.getItem('tokenInfo')
    console.log(token);
    token = JSON.parse(token);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={css.header}>

            <div>
                <img src={logo} alt="logo" />
            </div>
            {/* <div className={css.gamburger}>
                <button type="button" className={css.toggle} onClick={handleToggleClick}>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                </button>      
            </div> */}

            {isOpen && (<MobileMenu />)}
            {/* <div className={css.userMenu}>{UserLogin} */}
            
                <Headermenu />
                
                {/* <LimitCompanies /> */}
                {/* <Loader /> */}
            {!token && (
                <UserLogin /> 
            )}    
                
            {token && (<>
                <LimitCompanies token={token}/>
                <UserAvatar />
                </>
            )}
                {/* <UserAvatar /> */}
                {/* {<UserLogin />&&()} */}
                {/* <img src="/img/user-avatar.svg" alt="user-avatar"/>
                <img src="/img/arrow-down.svg" alt="user-arrow"/> */}
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