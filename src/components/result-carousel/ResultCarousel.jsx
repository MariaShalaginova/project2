import css from './ResultCarousel.module.css';
import { useState } from 'react';
// import Magnifier from '../../assets/magnifier.svg';
// import Clock from '../../assets/clock.svg';
// import Lock from '../../assets/lock.svg';
// import ChevronLeft from '../../assets/chevron-left.svg';
// import ChevronRight from '../../assets/chevron-right.svg';
// import Loader from '../loader/Loader';
import Spinner from '../loader/Spinner';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const Result= (props) => {
    const {isLoading, histogram } = props;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              initialSlide: 1
            }
          },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       initialSlide: 1,
        //       infinite: false
        //     }
        //   },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              initialSlide: 1
            }
          }
        ]
      };
    
    return (

        <div className={css.wrapper}>   
            <div className={css.carousel}>
                {/* <div className={css.chevronLeft}>
                    <img src={ChevronLeft} alt="chevron left img"/>
                </div> */}
                <div className={css.summaryBlock}>
                        <div className={css.text}>
                                <p>Период</p>
                                <p>Всего</p>
                                <p>Риски</p>
                        </div>
                        <div className={css.card}>

                            {isLoading ? (<>
                                <div className={css.carouselLoading}>
                                    <Spinner />
                                    <p>Загружаем данные</p>
                                    </div>
                                </>): ''}
                                
                            <Slider {...settings}>
                            {
                                histogram.length? 
                                histogram.map((company, index) => {
                                    const date = new Date(company.date);

                                    const year = date.getFullYear();
                                    const month = ('0' + (date.getMonth() + 1)).slice(-2); // добавляем ноль в начале, если месяц < 10
                                    const day = ('0' + date.getDate()).slice(-2); // добавляем ноль в начале, если число < 10
                                
                                
                                    return (
                                        <>
                                            <div className={css.item}>
                                                <div className={css.data} key={index}>
                                                    <p>{day}.{month}.{year}</p>
                                                    <p>{company.numberDosc}</p>
                                                    <p>{company.riskNumber}</p>
                                                </div>
                                    
                                                <div className={css.vl}>      
                                                </div>
                                            </div>
                                        </>
                                    )
                        
                                    }) : ""
                                        
                            } 
                            </Slider>                      
                        </div>
                      
                </div>
                
            </div>
            
        </div>         
    )
}

export default Result