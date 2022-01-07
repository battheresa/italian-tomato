import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Cart.module.css';

import { formatCurrency } from '../utilities/customFunctions';
import { useStateContext } from '../utilities/StateContext';
import { getSubtotal } from '../utilities/StateReducer';

// TODO: routing

function Cart({ mode, setOpen }) {
    const intl = useIntl();
    const router = useRouter();
    const [ { cart }, dispatch ] = useStateContext();

    return (
        <div className={styles.container} mode={mode}>
            <h2 color='alt'>{translate('header.shopping_cart').toUpperCase()}</h2>
            
            <div className={styles.list}>
                {cart.map(item => (
                    <div key={item.id} className={styles.item}>
                        <div>
                            <h4>{intl.locale === 'en' ? item.name : item.name_zh}</h4>
                            <h6 hoverable='false' weight='medium'>HK$ {formatCurrency(item.price * item.quantity)}</h6>
                        </div>
                        <p>{translate('size')}: {item.size}</p>
                        <p>{translate('quantity')}: {item.quantity}</p>
                    </div>
                ))}
            </div>

            <div className={styles.subtotal}>
                <h4>Subtotal: <span>HK$ {formatCurrency(getSubtotal(cart))}</span></h4>
            </div>

            <button>{translate('review_order')}</button>
        </div>
    );
}

export default Cart;
