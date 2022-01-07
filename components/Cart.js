import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import EmptyCart from '../public/dummy/empty-cart.png';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Cart.module.css';

import { formatCurrency } from '../utilities/customFunctions';
import { useStateContext } from '../utilities/StateContext';
import { getSubtotal } from '../utilities/StateReducer';
import { ArrowLeft } from 'react-feather';

function Cart({ mode, setOpen }) {
    const intl = useIntl();
    const router = useRouter();
    const iconSize = 18;
    const [ { cart }, dispatch ] = useStateContext();

    const changeRoute = (destination) => {
        router.push(destination);
        setOpen(false);
    };

    return (
        <div className={styles.container} mode={mode}>

            {/* title */}
            <h2 color='alt'>{translate('header.shopping_cart').toUpperCase()}</h2>
            
            {/* cart */}
            {cart.length > 0 && <div>

                {/* item list */}
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

                {/* subtotal */}
                <div className={styles.subtotal}>
                    <h4>Subtotal: <span>HK$ {formatCurrency(getSubtotal(cart))}</span></h4>
                </div>

                {/* review order */}
                <button onClick={() => changeRoute('checkout')}>{translate('review_order')}</button>
            </div>}

            {/* empty cart */}
            {cart.length === 0 && <div className={styles.empty}> 
                <div><Image src={EmptyCart} alt='empty-cart' /></div>
                <h6 weight='medium'>{translate('empty_cart').toUpperCase()}</h6>
                
                <a onClick={() => changeRoute('/shop')}>
                    <span><ArrowLeft width={iconSize} /></span>
                    {translate('continue_shopping')}
                </a>
            </div>}
        </div>
    );
}

export default Cart;
