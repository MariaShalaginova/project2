import React from "react";
import css from './Carousel.module.css';
import Magnifier from '../../assets/magnifier.svg';
import Clock from '../../assets/clock.svg';
import Lock from '../../assets/lock.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import ChevronRight from '../../assets/chevron-right.svg';

const Card = () => {
    
    return (
        
            <div className={css.carousel}>
                <div className={css.chevronLeft}>
                    <img src={ChevronLeft} alt="chevron left img"/>
                </div>
                <div className={css.card}>
                    <img src={Magnifier} alt="magnifier img"/>
                    <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                </div>
                <div className={css.card}>
                    <img src={Clock} alt="clock img"/>
                    <p>Высокая и оперативная скорость обработки заявки</p>
                </div>
                <div className={css.card}>
                    <img src={Lock} alt="lock img"/> 
                    <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
                </div>
                <div className={css.chevronRight}>
                    <img src={ChevronRight} alt="chevron right img"/>
                </div>
            </div>
            
        
    )
}

export default Card