import Spinner from '../loader/Spinner';
import css from './LimitCompanies.module.css';
import { useEffect, useState } from 'react';

const LimitCompanies = (props) => {

    const {token} = props;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchData() {
           
            const result= await getCompanies();
            setData(result)
          }
          fetchData();
         
      });

    
    async function getCompanies() {
        setIsLoading(true);

        const response = await fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + token.accessToken
            } 
        
        });

        const result = await response.json();
        setIsLoading(false);

        return result;
    }
     

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
                    <p className={css.countCompanies}>34</p>
                    <p className={css.countLimit}>100</p>
                </div>
                </>
                 )
            }
        </div>
    )
}

export default LimitCompanies
