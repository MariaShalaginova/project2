import css from './UserAvatar.module.css';
import UserFoto from '../../assets/user-mini-foto.jpg'

const UserAvatar = () => {
    return (
        <div className={css.user}>
            <div className={css.nameAndLogout}>
                <p className={css.name}>Алексей А.</p>
                <p className={css.logout}>Выйти</p>
            </div>
            <img src={UserFoto} alt="avatar"/>
        </div>
    )
}

export default UserAvatar