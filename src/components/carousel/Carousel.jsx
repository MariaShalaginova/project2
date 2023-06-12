import React, { useState } from "react";
import css from './Carousel.module.css';
import Magnifier from '../../assets/magnifier.svg';
import Clock from '../../assets/clock.svg';
import Lock from '../../assets/lock.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import ChevronRight from '../../assets/chevron-right.svg';

//захардкодила карточки для примера карусели
let cards = [{
    id:1,
    src: Magnifier,
    alt: "magnifier img",
    text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
}, {
    id:2,
    src: Clock,
    alt: "clock img",
    text: "Высокая и оперативная скорость обработки заявки"
}, {
    id:3,
    src: Lock, 
    alt: "lock img",
    text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
},
{
    id:4,
    src: Lock, 
    alt: "lock img",
    text: "Карточка 4"
},
{
    id:5,
    src: Lock, 
    alt: "lock img",
    text: "Карточка 5"
}];

const Card = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onPrevClick = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
        
    };
    
      const onNextClick = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };
  

    return (
   
        <>
           <div className={css.carousel}>
                 <button className={css.chevronLeft} type='button' onClick={onPrevClick}>
                     <img src={ChevronLeft}  alt="chevron left img"/>
                 </button>
                
                {cards.slice(currentIndex, currentIndex + 3).map((card, index) => {
                        return (
                            <div className={css.card} >
                                        <img key={card.id} src={card.src} alt={card.alt}/>
                                        <p>{card.text}</p>
                            </div>
                        );
                    })
                }
                 
                <button className={css.chevronRight} type='button' onClick={onNextClick}>
                     <img src={ChevronRight} alt="chevron right img"/>
                 </button>
            </div>
        </>
    );  
};

export default Card