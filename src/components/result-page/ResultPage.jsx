import css from './ResultPage.module.css';
import React, { useState, lazy, Suspense, useEffect } from 'react';
import resultImg from '../../assets/result-img.png'
// import paper from '../../assets/document.jpg';
// import folders from '../../assets/folders.jpg';
// import scanImg from '../../assets/scan-img.png';
// import ScanPageForm from '../forms/ScanPageForm';
import Result from '../result-carousel/ResultCarousel';
import { useNavigate } from 'react-router-dom';
// import ArticleCard from '../article-card/ArticleCard';
import pluralize from '../../utils/plural';

const initialItemsToShow = 10;
const itemsPerLoad = 10;

const LazyResult = lazy(() => import('../article-card/ArticleCard'));

const ResultPage = (props) => {
    const { isLoading, histogram, article} = props;
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
    const [isLastPage, setIsLastPage] = useState(false);
    console.log(article);

    const navigate = useNavigate();
    useEffect(() => {
        
        let token  = localStorage.getItem('tokenInfo');

        //если нет токена, то перенаправление на страницу авторизации
        if (!token) {
            navigate('/login');
        } else {
            token = JSON.parse(token);
        
            const expireDate = token.expire; // сравниваем текущую дату с датой истечения токена
          
            if (new Date().toLocaleDateString() > new Date(expireDate).toLocaleDateString()) {//если токен истек
              localStorage.removeItem("tokenInfo"); // Удаление данные из localStorage
              navigate('/login'); // Перенаправление на страницу авторизации
            }
        }        
      }, [navigate]);

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