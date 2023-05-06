import css from './ScanPageForm.module.css';
import { useNavigate } from 'react-router-dom';
// import lockLogin from '../../assets/lock-login.svg'

const ScanPageForm = () => {
    const navigate = useNavigate();

    // function validateInn(inn, error) {
    //     var result = false;
    //     if (typeof inn === 'number') {
    //         inn = inn.toString();
    //     } else if (typeof inn !== 'string') {
    //         inn = '';
    //     }
    //     if (!inn.length) {
    //         error.code = 1;
    //         error.message = 'ИНН пуст';
    //     } else if (/[^0-9]/.test(inn)) {
    //         error.code = 2;
    //         error.message = 'ИНН может состоять только из цифр';
    //     } else if ([10, 12].indexOf(inn.length) === -1) {
    //         error.code = 3;
    //         error.message = 'ИНН может состоять только из 10 или 12 цифр';
    //     } else {
    //         var checkDigit = function (inn, coefficients) {
    //             var n = 0;
    //             for (var i in coefficients) {
    //                 n += coefficients[i] * inn[i];
    //             }
    //             return parseInt(n % 11 % 10);
    //         };
    //         switch (inn.length) {
    //             case 10:
    //                 var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
    //                 if (n10 === parseInt(inn[9])) {
    //                     result = true;
    //                 }
    //                 break;
    //             case 12:
    //                 var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
    //                 var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
    //                 if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
    //                     result = true;
    //                 }
    //                 break;
    //         }
    //         if (!result) {
    //             error.code = 4;
    //             error.message = 'Неправильное контрольное число';
    //         }
    //     }
    //     return result;
    // }

    return (
            <div className={css.scanForm}>
                <div className={css.leftSide}>
                    <form>

                    <div className={css.inn}>
                        <label htmlFor id="inn">Инн компании<span>&#8432;</span></label>
                        <input className={css.innInput} type="number" name="inn" id="inn" placeholder='10 цифр' required></input>
                    </div>
                    
                    <div className={css.ton}>
                        <label>Тональность</label>
                        {/* <input type="text" name="ton" id="ton"></input> */}
                        <select className={css.select}>
                            <option>Любая</option>
                            <option>Позитивная</option>
                            <option>Негативная</option>
                        </select>
                    </div>
                    <div className={css.docs}>
                        <label htmlFor id="quantity">Количество документов в выдаче<span>&#8432;</span></label>
                        <input className={css.docsInput} type="number" name="quantity" id="quantity" placeholder='От 1 до 1000' min='1' max='1000' required></input>
                    </div>
                    <div className={css.range}>
                        <label>Диапазон поиска<span>&#8432;</span>
                        <div className={css.date}>
                            <input type="text" name="date begin" id="date begin" placeholder='Дата начала' onfocus="(this.type='date')" required></input>
                            <input type="text" name="date end" id="date end" placeholder='Дата конца'></input>
                        </div></label>
                    </div>
                    <div className={css.innSearchMobile}>
                        <button  className={css.innSearchButton} type='submit'>Поиск</button>
                        <p>* Обязательные к заполнению поля</p>
                    </div>
                    </form>  
                </div>

                <div className={css.rigthSide}>
                    <div className={css.checkbox}>
                        <label><input type='checkbox'></input><span>Признак максимальной полноты</span></label>
                        <label><input type='checkbox'></input><span>Упоминания в бизнес-контексте</span></label>
                        <label><input type='checkbox'></input><span>Главная роль в публикации</span></label>
                        <label><input type='checkbox'></input><span>Публикации только с риск-факторами</span></label>
                        <label><input type='checkbox'></input><span>Включать технические новости рынков</span></label>
                        <label><input type='checkbox'></input><span>Включать анонсы и календари</span></label>
                        <label><input type='checkbox'></input><span>Включать сводки новостей</span></label>
                    </div>
                    <div className={css.innSearch}>
                        <button  className={css.innSearchButton} type='submit' onClick={async event => {navigate('/result')}}>Поиск</button>
                        <p>* Обязательные к заполнению поля</p>
                    </div>
                </div>
            </div>
        
        

    )
}

export default ScanPageForm