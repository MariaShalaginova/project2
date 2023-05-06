import css from './ResultCarousel.module.css';
// import Magnifier from '../../assets/magnifier.svg';
// import Clock from '../../assets/clock.svg';
// import Lock from '../../assets/lock.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import ChevronRight from '../../assets/chevron-right.svg';
// import Loader from '../loader/Loader';
import Spinner from '../loader/Spinner';

const Result= () => {
    
    return (
        // <div className={css.wrapper}>
        //     <div className={css.summary}>   
        //         <h3>Общая сводка</h3>
        //         <p>Найдено 100 вариантов</p>
        //     </div>    
            <div className={css.carousel}>
                <div className={css.chevronLeft}>
                    <img src={ChevronLeft} alt="chevron left img"/>
                </div>
                <div className={css.summaryBlock}>
                   <div className={css.text}>
                        <p>Период</p>
                        <p>Всего</p>
                        <p>Риски</p>
                   </div>
                    <div className={css.card}>
                        <div className={css.data}>
                            <p>17.10.2021</p>
                            <p>5</p>
                            <p>0</p>
                        </div>

                        <div className={css.vl}>      
                        </div>
                    </div>
                    <div className={css.carouselLoading}>
                    {/* <div className={css.loader}> */}
                        <Spinner />
                    {/* </div> */}
                        <p>Загружаем данные</p>
                    </div>
                </div>
                <div className={css.chevronRight}>
                    <img src={ChevronRight} alt="chevron right img"/>
                </div>
            </div>
            
        // </div>    
        
    )
}

export default Result