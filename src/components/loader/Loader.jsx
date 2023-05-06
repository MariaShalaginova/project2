import css from './Loader.module.css';
import Spinner from './Spinner';

const Loader = () => {
    return (
        <div className={css.loader}>
            <Spinner />
        </div>
    )
}

export default Loader