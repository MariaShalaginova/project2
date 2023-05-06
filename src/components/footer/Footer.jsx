import css from './Footer.module.css'
import logo from '../../assets/logo-footer.svg'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.logo}>
                    <img src={logo} className={css.logo} alt="logo" />
                </div>
                <div>
                    <p>г. Москва, Цветной б-р, 40<br/>
                    +7 495 771 21 11<br/>
                    info@skan.ru<br/><br/>

                    Copyright. 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer