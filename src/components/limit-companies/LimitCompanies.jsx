import css from './LimitCompanies.module.css';

const LimitCompanies = () => {
    return (
        <div className={css.limit}>
            <div className={css.text}>
                <p>Использовано компаний</p>
                <p>Лимит по компаниям</p>
            </div>
            <div className={css.count}>
                <p className={css.countCompanies}>34</p>
                <p className={css.countLimit}>100</p>
            </div>
        </div>
    )
}

export default LimitCompanies