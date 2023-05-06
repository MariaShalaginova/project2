import css from './ResultPage.module.css';
import resultImg from '../../assets/result-img.png'
// import paper from '../../assets/document.jpg';
// import folders from '../../assets/folders.jpg';
// import scanImg from '../../assets/scan-img.png';
// import ScanPageForm from '../forms/ScanPageForm';
import Result from '../result-carousel/ResultCarousel';
import ArticleCard from '../article-card/ArticleCard';

const ResultPage = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <div className={css.text}>
                    <h1>Ищем. Скоро будут результаты</h1>
                    <p>Поиск может занять некоторое время, <br/>
                    просим сохранять терпение.</p>
                </div>
                
                <div className={css.img}>
                        <img src={resultImg} alt="aim"/>
                </div> 

            </div>
            <div className={css.summary}>   
                <h3>Общая сводка</h3>
                <p>Найдено 100 вариантов</p>
                <Result />
                
            </div>         
            <h3>Список документов</h3>

            <div className={css.cards}>
                <ArticleCard /> 
            </div>

            <button className={css.showMoreButton} type='button'>Показать больше</button>  
               
        </div>
    )
}

export default ResultPage