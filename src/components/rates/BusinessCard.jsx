import css from './Rates.module.css';
import notebook from '../../assets/notebook.svg';
import clsx from 'clsx';

const BusinessCard = (props) => {
        //делаем активным выбранный тариф- появляется бедж "Текущий тариф" 
    //и кнопка «Подробнее» меняется на «Перейти в личный кабинет»
    const { onSelect,selectedId } = props; 

    const handleSelect = (id) => {
        onSelect(id);
    };    
  
    return (
        <div className={clsx(css.formCard, selectedId === 3 ? css.selected : "none")} onClick={() => handleSelect(3)}>
        <div className={css.formCardTop}>
            <div>
                <h3>Business</h3>
                <p>Для корпоративных клиентов</p>
            </div>
            <img src={notebook} alt="magnifier foto"/>
            
        </div>
        <div className={css.rateText}>
            {selectedId === 3 ? (
                <div className={css.currentRate}>
                    <p>Текущий тариф</p>
                </div>
            ) : null}
            <h3>2379 &#8381; &nbsp;<s>3700 &#8381;</s>
            </h3>
            <br/>
            <br/>
            <p className={css.rateIncludes}>В тариф входит:</p>
            <ol>
                <li>Все пункты тарифа Pro</li>
                <li>Безлимитное количество запросов</li>
                <li>Приоритетная поддержка</li>
            </ol>
            {selectedId !== 3 ? (
                <button type="button">Подробнее</button>
            ) : (
                 <button type="button" className={css.cabinet}>Перейти в личный кабинет</button>  
            ) }
        </div> 
    </div>    
    )
}

export default BusinessCard