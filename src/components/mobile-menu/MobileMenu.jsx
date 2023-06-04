import React, { useState } from "react";
import css from './MobileMenu.module.css';
import logo from '../../assets/logo-footer.svg';
import { Link, useNavigate } from 'react-router-dom';
import closeIcon from '../../assets/close-icon.svg';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };
	// const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
        <div className={isOpen ? css.menu : css.menuHide}>
           
                <div className={css.header}>
                    <img src={logo} alt="logo" />
                
                {/* <Link to='/'> */}
                <div onClick={handleToggleClick}>
                    <img src={closeIcon} alt="close"/>
                </div>    
                {/* </Link> */}

                </div>
                    <ul className={css.list}>
                        <Link to='/'><li onClick={handleToggleClick}>Главная</li></Link>
                        <Link to='/rates'><li onClick={handleToggleClick}>Тарифы</li></Link>
                        <li>FAQ</li>
                    </ul>
                
                <div>
                    <p>Зарегистрироваться</p>
                </div>

                <button type='button' className={css.userButton} onClick={async event => {navigate('/login')}}>
                    Войти
                </button>
            
        </div>
    )
}

export default MobileMenu