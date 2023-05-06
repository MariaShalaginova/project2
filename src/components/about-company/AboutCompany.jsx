import React from "react";
import css from './AboutCompany.module.css';
import AboutCompanyFoto from '../../assets/about-company.jpg';
import Card from "../carousel/Carousel"
import AboutCompanyFotoMobile from '../../assets/about-company-mobile.jpg'

const AboutCompany = () => {
    
    return (
        <section className={css.container}>
            <div>
                <h2>
                Почему именно мы
                </h2>
            </div>
            <Card />
            <div className={css.image}>
                <img src={AboutCompanyFoto} alt="about company foto"/>
            </div>
            <div className={css.imageMobile}>
                <img src={AboutCompanyFotoMobile} alt="about company mobile foto"/>
            </div>
            {/* <Routes>
                <Route exact path="/" element={<Board {...props} />} />
                <Route path="/tasks/:taskId" element={<TaskDetail {...props} />} />             
            </Routes> */}
        </section>
    )
}

export default AboutCompany