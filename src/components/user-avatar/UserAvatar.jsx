import css from './UserAvatar.module.css';
import UserFoto from '../../assets/user-mini-foto.jpg'

const UserAvatar = () => {

    const handleLogout = () => {
        localStorage.removeItem('userData');
        window.location.href = '/';
    }

    
    return (
        <div className={css.user}>
            <div className={css.nameAndLogout}>
                <p className={css.name}>Алексей А.</p>
                <button type='button' className={css.logout} onClick={handleLogout}>Выйти</button>
            </div>
            <img src={UserFoto} alt="avatar"/>
        </div>
    )
}

export default UserAvatar