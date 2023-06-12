import Spinner from '../loader/Spinner';
import css from './LimitCompanies.module.css';
import { useEffect, useState } from 'react';

const LimitCompanies = (props) => {

    const {token} = props;
    const [isLoading, setIsLoading] = useState(false);
    const [companyData, setCompanyData] = useState({});

    //получение данных о компании для хэдера
    useEffect(() => {
        async function fetchData() {           
            await getCompanies();
        }

        fetchData(); 
        // eslint-disable-next-line        
    }, []);

    
    async function getCompanies() {
        setIsLoading(true); //пока идет запрос , будет грузится лоадер

        const response = await fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + token.accessToken
            } 
        
        });

        const result = await response.json();
        setIsLoading(false);
        setCompanyData(result.eventFiltersInfo);  //сэтаем полученные данные о компаниях      
    };
     
    return (
        <div className={css.limit}>
            {isLoading ? (
                <Spinner />
            ) : (<>
                <div className={css.text}>
                    <p>Использовано компаний</p>
                    <p>Лимит по компаниям</p>
                </div>
                <div className={css.count}>
                    <p className={css.countCompanies}>{companyData?.usedCompanyCount}</p>
                    <p className={css.countLimit}>{companyData?.companyLimit}</p>
                </div>
                <div className={css.textMobile}>
                    <p className={css.par}>Использовано компаний</p>
                    <p className={css.countCompanies}>{companyData?.usedCompanyCount}</p>
                    <p className={css.par}>Лимит по компаниям</p>
                    <p className={css.countLimit}>{companyData?.companyLimit}</p>
                </div>
                </>
                 )
            }
        </div>
    );
};

export default LimitCompanies
