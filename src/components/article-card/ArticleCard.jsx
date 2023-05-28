import css from './ArticleCard.module.css';
import img from '../../assets/article-img.jpg';

const ArticleCard = () => {


    
    return (
        <div className={css.card}>
            <div className={css.cardTop}> 
                <p>13.09.2021</p>&nbsp;&nbsp; 
                <a href='#'>Комсомольская правда kp.ru</a>
            </div>    

            <h3>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
            <button className={css.newsButton} type='button'>Технические новости</button>
            <img src={img} alt="article img"/>
             <div className={css.text}>
                <p>SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. 
                    С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет.
                    Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 
                    80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса.
                    А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.</p>
            </div> 
            <div className={css.cardBottom}> 
                <button className={css.readButton}>Читать в источнике</button>
                <div className={css.words}>222 слова</div>
            </div>    
                    
        </div>
    )
}

export default ArticleCard