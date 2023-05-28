import css from './Headermenu.module.css'
import { Link } from 'react-router-dom'

function Headermenu() {
    return (
        <nav className={css.mobile}>
           
                <ul className={css.navigation}>
                <Link to='/'>
                    <li className={css.item}>Главная</li>
                </Link> 
                <Link to="/rates">
                    <li className={css.item}>Тарифы</li>
                </Link>    
                    <li className={css.item}>FAQ</li>
                </ul>
            
        </nav>
    )
}
export default Headermenu