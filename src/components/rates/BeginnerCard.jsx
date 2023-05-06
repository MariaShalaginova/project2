import css from './Rates.module.css';
import lamp from '../../assets/lamp.svg';
import clsx from 'clsx';

const BeginnerCard = (props) => {

    const { onSelect,selectedId} = props;
       //делаем активным выбранный тариф- появляется бедж "Текущий тариф" 
    //и кнопка «Подробнее» меняется на «Перейти в личный кабинет»
    // const [isRateActiv, setRateActive] = useState(false);

    // const handleClick = (e) => {
    //     setRateActive(current => !current)
    // };

    const handleSelect = (id) => {
        onSelect(id);
    };    

    return (
    
        <div className={clsx(css.formCard, selectedId === 1 ? css.selected : "none")} onClick={() => handleSelect(1)}>
            <div className={css.formCardTop}> 
                <div>
                    <h3>Beginner</h3>
                    <p>Для небольшого исследования</p>
                </div>
                    <img src={lamp} alt="magnifier foto"/>
                </div> 

                <div className={css.rateText}>
                    {selectedId === 1 ? (
                    <div className={css.currentRate}>
                        <p>Текущий тариф</p>
                        </div>
                    ) : null}
                    <h3>799 &#8381; &nbsp;<s>1200 &#8381;</s></h3>
                    <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    <br/>
                    <p className={css.rateIncludes}>В тариф входит:</p>
                    <ol>
                        <li>Безлимитная история запросов</li>
                        <li>Безопасная сделка</li>
                        <li>Поддержка 24/7</li>
                    </ol>
                    {selectedId !== 1 ? (
                        <button type="button">Подробнее</button>
                    ) : (
                        <button type="button" className={css.cabinet}>Перейти в личный кабинет</button>  
                    ) }
                </div> 
                    
            </div>
    )
}

export default BeginnerCard