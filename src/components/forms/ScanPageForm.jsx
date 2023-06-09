import css from './ScanPageForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
// import clsx from 'clsx';
import validateInn from '../../utils/validInn';

const ScanPageForm = (props) => {
    
    const { setIsLoading, setHistogram, setArticle} = props;
    const navigate = useNavigate();
    useEffect(() => {
        
        let token  = localStorage.getItem('tokenInfo');

        //если нет токена, то перенаправление на страницу авторизации
        if (!token) {
            navigate('/login');
        } else {
            token = JSON.parse(token);
        
            const expireDate = token.expire; // сравниваем текущую дату с датой истечения токена

            const currentDate = new Date();
            const comparisonDate = new Date(expireDate);
            const isGreaterThan = currentDate.getTime() > comparisonDate.getTime();
          
            if (isGreaterThan) {
              localStorage.removeItem("tokenInfo"); // Удалить данные из localStorage
              navigate('/login'); // Перенаправление на страницу авторизации
            }
        }        
      }, [navigate]);

    let token  = localStorage.getItem('tokenInfo')
    // console.log(token);
    token = JSON.parse(token);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inn, setInn] = useState('');
    const [selectedOption, setSelectedTonality] = useState('any');
    const [docs, setDocs] = useState('');
    const today = new Date().toISOString().substr(0, 10);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [errorInn, setErrorInn] = useState({});
    const [validDates, setValidDates] = useState(true);
    const [fieldsCorrect, setfieldsCorrect] = useState(false);
    // const [onlyMainRole, setOnlyMainRole] = useState(false);
    // const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false)
    const [checkedItems, setCheckedItems] = useState({});
    
    // проверка заполнения обязательных полей
    function checkFields () {

        if (!errorInn && docs && validDates) {
            setfieldsCorrect(true);
            setButtonDisabled(false) //делаем кнопку "Поиск" кликабельной
        };
    };

    //заполнение поля и проверка ИНН
    async function handleInnChange(e) {
        setInn(e.target.value);
        const {validInn,error} = validateInn(e.target.value)
    
        if(!validInn){
            await setErrorInn(error)
        } else {
            setErrorInn(null)
        }
        checkFields()
    };

    //заполнение поля "Тональность"
    const handleTonalityChange = (event) => {
        setSelectedTonality(event.target.value);
    };

    //заполнение поля "Количество документов к выдаче"    
    function handleDocsChange(e) {
        setDocs(Number(e.target.value));
        // setButtonDisabled(!e.target.value || !docs);
        checkFields()
    };

    //выбор чекбоксов
    const handleChangeCheckbox = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
        };

    //выбор диапазона дат поиска     
    const handleDates = (e) => {
        e.preventDefault();
        let date = e.target.name;
        const today = new Date();
        
     //проверка диапазона дат- даты не должны быть больше текущей даты   
        if (new Date(date === "date end"?e.target.value:endDate) >= today) {
            setValidDates(false)
        } else //дата начала не должна быть больще даты окончания
        if (new Date(date === "date end"?e.target.value:endDate) >= new Date(date === "date begin"?e.target.value:startDate)) {
            if(date === "date end" ){
          
                setEndDate(e.target.value)
            }else {
                setStartDate(e.target.value)
            }
            setValidDates(true);
        } 
        else {setValidDates(false)}
        checkFields();
    };

    //запросы при нажатии кнопки "Поиск"
    async function handleSearch() {
        const searchParams = JSON.stringify({
            "issueDateInterval": {
              "startDate": startDate,
              "endDate": endDate
            },
            "searchContext": {
              "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                  {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": inn,
                    "maxFullness": checkedItems.maxFullness,
                    "inBusinessNews": checkedItems.inBusinessNews
                  }
                ],
                "onlyMainRole": checkedItems.onlyMainRole,
                "tonality": selectedOption,
                "onlyWithRiskFactors": checkedItems.onlyWithRiskFactors
              },
            },
            "attributeFilters": {
              "excludeTechNews": checkedItems.excludeTechNews,
              "excludeAnnouncements": checkedItems.excludeAnnouncement,
              "excludeDigests": checkedItems.excludeDigests
            },
            "similarMode": "duplicates",
            "limit": docs,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
              "totalDocuments",
              "riskFactors"
            ]
          });

        navigate('/result'); //роут на страницу с результами поиска
        setIsLoading(true); //загрузка лоадера перед получением данных

        // получаем общую сводку по количеству публикаций и рискам
        const companyDataInfo = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': 'Bearer ' + token.accessToken
            },
            body: searchParams
          });

        const result = await companyDataInfo.json(); 

        //получаем список публикаций
        const publicationDataInfo = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': 'Bearer ' + token.accessToken
            },
            body: searchParams
        });

        const publications = await publicationDataInfo.json();   

        setIsLoading(false); //остановка лоадера перед рендером результатов поиска
    //    console.log(result);

    //если есть данные по поиску инн, то получаем массив с нужными полями для вывода сводки
        if (result) {
            dispatchResultItems(result)
        };

    //если есть публикации, то получаем объект из айди публикаций   
        let publicationIds;

        if (publications) {
            publicationIds = getPublicationIds(publications)
        };

        //запрос на данные публикаций при их наличии
        if (publicationIds) {
            const documents = await fetch("https://gateway.scan-interfax.ru/api/v1/documents", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8',
                  'Authorization': 'Bearer ' + token.accessToken
                },
                body: JSON.stringify(publicationIds)
            });

            const publicationItems = await documents.json();
            setArticle(publicationItems);
        };
       
    }

     //если все обязательные поля заполнены верно, то запускаем функцию поиска
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (fieldsCorrect) {
            handleSearch()
        };

    }

//получение массива данных для вывода сводки в карусели
    function dispatchResultItems(result) {
        if(result.length || result.data){
            const docs = result.data[0].data;
            const risk = result.data[1].data;
            let newData = [];
    
            for(let i = 0;i<docs.length;i++){
                newData.push({
                    id: i+1,
                    date: docs[i].date,
                    numberDosc:docs[i].value
                })       
            };
    
            for(let i = 0;i<risk.length;i++){  
                newData[i].riskNumber = risk[i].value
            };
    
            setHistogram(newData);
            
            console.log(newData);
        }
    }
    
    //получаем объект из массива айди публикаций
    function getPublicationIds(publications) {
        const publicationData = publications.items;
        let publicationIds =[];

        for (let i = 0; i < publicationData.length; i++){
            publicationIds.push(
                publicationData[i].encodedId
            )
        }
        return {ids:publicationIds};

    }

    return (
            <div className={css.scanForm}>
                <form className={css.form}>
                    <div className={css.leftSide}>

                        <div className={css.inn}>
                            <label htmlFor="true" id="inn">Инн компании<span className={errorInn >= 1 ? css.invalidSpan : ''}>&#8432;</span></label>
                            <input className={css.innInput}
                            name="inn" id="inn" placeholder='10 или 12 цифр' value={inn} onChange={handleInnChange} required></input>
                            {errorInn && (<div className={css.message}>{errorInn.message}</div>)}
                        </div>
                        
                        <div className={css.ton}>
                            <label>Тональность</label>
                            <select className={css.select} value={selectedOption} onChange={handleTonalityChange}>
                                <option value="any">Любая</option>
                                <option value="positive">Позитивная</option>
                                <option value="negative">Негативная</option>
                            </select>
                        </div>
                        <div className={css.docs}>
                            <label htmlFor="true" id="quantity">Количество документов в выдаче<span className={docs>1000 ? css.invalidSpan : ''}>&#8432;</span></label>
                            <input className={css.docsInput} type="number" name="quantity" id="quantity" placeholder='От 1 до 1000' min='1' max='1000' value={docs} onChange={handleDocsChange} required></input>
                            {/* {docs.length===0 && (<div className={css.message}>Обязательное поле</div>)} */}
                        </div>
                        <div className={css.range}>
                            <label>Диапазон поиска<span className={!validDates ? css.invalidSpan : ''}>&#8432;</span>
                            <div className={css.date}>
                                <input type = "date" className={!validDates ? css.invalid : "none"} name="date begin" id="date begin" placeholder='Дата начала' value={startDate} onChange={handleDates} required></input>
                                <input type = "date" className={!validDates ? css.invalid : "none"} name="date end" id="date end" placeholder='Дата конца' value={endDate} onChange={handleDates} required></input>
                                
                            </div>
                            {!validDates && (<div className={css.message}>Введите корректные данные</div>)}
                            </label>
                        </div>
                        <div className={css.innSearchMobile}>
                            <button  className={css.innSearchButton} onClick={handleSubmit} type='button' disabled={buttonDisabled}>Поиск</button>
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                    </div>

                    <div className={css.rigthSide}>
                        <div className={css.checkbox}>
                            <label><input type='checkbox' name="maxFullness" checked={checkedItems.maxFullness} onChange={handleChangeCheckbox}></input><span>Признак максимальной полноты</span></label>
                            <label><input type='checkbox' name="inBusinessNews" checked={checkedItems.inBusinessNews} onChange={handleChangeCheckbox}></input><span>Упоминания в бизнес-контексте</span></label>
                            <label><input type='checkbox' name="onlyMainRole" checked={checkedItems.onlyMainRole} onChange={handleChangeCheckbox}></input><span>Главная роль в публикации</span></label>
                            <label><input type='checkbox' name="onlywithRiskFactors" checked={checkedItems.onlyWithRiskFactors} onChange={handleChangeCheckbox}></input><span>Публикации только с риск-факторами</span></label>
                            <label><input type='checkbox' name="excludeTechNews" checked={checkedItems.excludeTechNews} onChange={handleChangeCheckbox}></input><span>Включать технические новости рынков</span></label>
                            <label><input type='checkbox' name="excludeAnnouncement" checked={checkedItems.excludeAnnouncement} onChange={handleChangeCheckbox}></input><span>Включать анонсы и календари</span></label>
                            <label><input type='checkbox' name="excludeDigests" checked={checkedItems.excludeDigests} onChange={handleChangeCheckbox}></input><span>Включать сводки новостей</span></label>
                        </div>
                        <div className={css.innSearch}>
                            <button  className={css.innSearchButton} onClick={handleSubmit} disabled={buttonDisabled}>Поиск</button>
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                        
                    </div>
                </form>
            </div>
        
        

    )
}

export default ScanPageForm