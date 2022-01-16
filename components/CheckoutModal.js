import { translate } from '../translations/Translations';
import styles from '../styles/components/CheckoutModal.module.css';
import ArrowLink from './ArrowLink';

function CheckoutModal({ id, open, setOpen }) {
    return (
        <div className={styles.container} style={{ visibility: open ? 'visible' : 'hidden' }}>
            <div className={styles.modal}>
                <h1>{translate('order_comfirmation_title')}</h1>
                <h4 mode='faded'>{translate('order_comfirmation_number')}: {id}</h4>
                <ArrowLink text='back_to_home' redirectTo={'/'} />
            </div>
        </div>
    );
}

export default CheckoutModal;
