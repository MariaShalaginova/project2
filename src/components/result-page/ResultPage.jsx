import css from './ResultPage.module.css';
import React, { useState, lazy, Suspense, useEffect } from 'react';
import resultImg from '../../assets/result-img.png'
import Result from '../result-carousel/ResultCarousel';
import { useNavigate } from 'react-router-dom';
import pluralize from '../../utils/plural';
import { useSelector } from "react-redux";

const initialItemsToShow = 10;
const itemsPerLoad = 10;
//импорт карточек для ленивой загрузки
const LazyResult = lazy(() => import('../article-card/ArticleCard'));

const ResultPage = (props) => {
    const { isLoading, histogram, article} = props;
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
    const [isLastPage, setIsLastPage] = useState(false);
    let { isAuthenticated } = useSelector((state) => state.auth);  
    console.log(article);

    const navigate = useNavigate();
    useEffect(() => {

        if( !isAuthenticated) {
            navigate('/login');
        }
   
      }, [navigate,isAuthenticated]);

    const loadMoreItems = () => {
        setItemsToShow(itemsToShow + itemsPerLoad);
    }; 

    let cards;

    //если приходят данные о публикациях, то выводим их через ленивую загрузку
    if (article) {
        cards = article.map((card, index) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          {index < itemsToShow && <LazyResult card={card?.ok} index={index} />}
        </Suspense>
      ));
    }
    
    // Определяем, является ли текущая страница последней
    if (itemsToShow >= 100) {
        setIsLastPage(true);
    }

    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                {!histogram && (
                    <>
                        <div className={css.text}>
                            <h1>Ищем. Скоро будут результаты</h1>
                            <p>Поиск может занять некоторое время, <br/>
                            просим сохранять терпение.</p>
                        </div>
                        
                        <div className={css.img}>
                                <img src={resultImg} alt="aim"/>
                        </div>
                    </>
                )} 

            </div>
            <div className={css.summary}>   
                <h3>Общая сводка</h3>
                <p>Найдено {histogram.length} {pluralize(histogram.length, ['вариант', 'варианта', 'вариантов'])}</p>
                <Result histogram={histogram} isLoading={isLoading}/>
                
            </div>         
            <h3>Список документов</h3>

            <div className={css.cards}>
                {cards}
            </div>

            
                 {!isLastPage && <button className={css.showMoreButton} onClick={loadMoreItems}>Показать больше</button>}
            {/* <button className={css.showMoreButton} type='button'>Показать больше</button>   */}
               
        </div>
    )
}

export default ResultPage