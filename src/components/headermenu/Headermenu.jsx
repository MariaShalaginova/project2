import css from './Headermenu.module.css'
import { Link } from 'react-router-dom'

function Headermenu() {
    return (
        <nav className={css.mobile}>
           
                <ul className={css.navigation}>
                <Link to='/'>
                    <li className={css.item}><a href="#">Главная</a></li>
                </Link> 
                    <li className={css.item}><a href="#">Тарифы</a></li>
                    <li className={css.item}><a href="#">FAQ</a></li>
                </ul>
            
        </nav>
    )
}
export default Headermenu