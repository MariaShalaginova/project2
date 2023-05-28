import css from './ResultCarousel.module.css';
// import Magnifier from '../../assets/magnifier.svg';
// import Clock from '../../assets/clock.svg';
// import Lock from '../../assets/lock.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import ChevronRight from '../../assets/chevron-right.svg';

const ResultLoading= (props) => {
    
    const {token} = props;
    
    return (
        <div>
            <div className={css.carouselLoading}>
                <div className={css.chevronLeft}>
                    <img src={ChevronLeft} alt="chevron left img"/>
                </div>
                <div className={css.summaryBlock}>
                
                    <div className={css.vl}>      
                    </div>
                    
                </div>
                <div className={css.chevronRight}>
                    <img src={ChevronRight} alt="chevron right img"/>
                </div>
            </div>
            
        </div>    
        
    )
}

export default ResultLoading