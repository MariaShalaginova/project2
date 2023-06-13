import css from './ScanPage.module.css';
import paper from '../../assets/document.svg';
import folders from '../../assets/folders.svg';
import scanImg from '../../assets/scan-img.png';
import ScanPageForm from '../forms/ScanPageForm';

const ScanPage = (props) => {

    const { setIsLoading, setHistogram, setArticle} = props;
    
    return (
        <div className={css.wrapper}>
            
                <div className={css.scan}>
                    <h1>Найдите необходимые данные в пару кликов.</h1>
                    <p>Задайте параметры поиска. <br/>
                        Чем больше заполните, тем точнее поиск</p>
                    <div className={css.docsMobile}>
                        <img src={paper} alt="document"/>
                    </div>    
                    <ScanPageForm setHistogram={setHistogram} setIsLoading={setIsLoading} setArticle={setArticle}/>    
                </div>
                <div className={css.images}>
                    <div className={css.docs}>
                        <img src={paper} alt="document"/>
                        <img className={css.folders} src={folders} alt="folders"/>
                    </div>
                    <div className={css.mainImg}>
                        <img src={scanImg} alt="scan page img"/>
                    </div>
                </div>    
        </div>
    );
};

export default ScanPage