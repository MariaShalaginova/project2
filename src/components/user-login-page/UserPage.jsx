import css from './UserPage.module.css';
import people from '../../assets/user-page.jpg';
import UserLoginForm from '../forms/UserLoginForm';

const UserPage = () => {
    
    return (
        <div className={css.wrapper}>
            
                <div className={css.userPage}>
                    <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <img src={people} alt="people"/>
                </div>
                {/* <div className={css.formBlock}>
                    <UserLoginForm />
                </div> */}
                <UserLoginForm />
                <div className={css.userPageMobile}>
                    <img src={people} alt="people"/>
                </div>
        </div>
    )
}

export default UserPage