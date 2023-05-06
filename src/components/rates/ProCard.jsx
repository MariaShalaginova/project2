import css from './Rates.module.css';
import Target from '../../assets/target.svg';
import clsx from 'clsx';

const ProCard = (props) => { 
    const { onSelect,selectedId} = props;
         //делаем активным выбранный тариф- появляется бедж "Текущий тариф" 
    //и кнопка «Подробнее» меняется на «Перейти в личный кабинет»
   
    const handleSelect = (id) => {
        onSelect(id)
    };    

    return (
        
        <div className={clsx(css.formCard, selectedId === 2 ? css.selected : "none")} onClick={() => handleSelect(2)}>   
            <div className={css.formCardTop}> 
                <div>
                    <h3>Pro</h3>
                    <p>Для HR и фрилансеров</p>
                </div>
                    <img src={Target} alt="target foto"/>
            </div>    

            <div className={css.rateText}>
                {selectedId === 2 ? (
                     <div className={css.currentRate}>
                         <p>Текущий тариф</p>
                     </div>
                ) : null}
                <h3>1200 &#8381; &nbsp;<s>2600 &#8381;</s>
                </h3>
                <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                <br/>
                <p className={css.rateIncludes}>В тариф входит:</p>
                <ol>
                    <li>Все пункты тарифа Beginner</li>
                    <li>Экспорт истории</li>
                    <li>Рекомендации по приоритетам</li>
                </ol>
                {selectedId !== 2 ? (
                    <button type="button">Подробнее</button>
                ) : (
                    <button type="button" className={css.cabinet}>Перейти в личный кабинет</button>  
                ) }
            </div> 

        </div>
    )
}    

export default ProCard