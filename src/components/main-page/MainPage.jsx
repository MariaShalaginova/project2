import React from "react";
import css from './MainPage.module.css'
import MainPageFoto1 from '../../assets/main-page-foto1.jpg'
import { Link } from 'react-router-dom';
// import ReduxApp from "../../App-redux";
// import UserPage from "../user-login-page/UserPage";

const MainPage = () => {
    
    return (
        <section className={css.container}>

            <div className={css.info}>
                <h1>
                    сервис по поиску публикаций <br/>
                    о компании<br/>
                    по его ИНН
                </h1>
                <p>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </p>
                <Link to='/scan'>
                    <button type="button" className={css.mainButton}>
                        Запросить данные
                    </button>
                </Link>
            </div>
            <div className={css.fotoFirst}>
                <img src={MainPageFoto1} alt="main page foto1"/>
            </div>

        </section>
    )
}

export default MainPage