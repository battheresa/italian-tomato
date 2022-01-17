import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useState, useEffect } from 'react';
import { X, MinusCircle, PlusCircle } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/Checkout.module.css';

import { getPickupLocations, getDiscountCodes } from './api/services';
import { useWindowDimensions } from '../utilities/customHooks';
import { generateOrderNumber, formatCreditCard, formatCurrency, formatPhone } from '../utilities/customFunctions';
import { useStateContext } from '../utilities/StateContext';
import { getSubtotal } from '../utilities/StateReducer';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Dropdown } from '../components/Utilities';
import CheckoutModal from '../components/CheckoutModal';
import ArrowLink from '../components/ArrowLink';

function Checkout() {
    const intl = useIntl();
    
    const [ { cart }, dispatch ] = useStateContext();
    
    const iconSize = 18;
    const { width, height } = useWindowDimensions();
    const [ sidebar, setSidebar ] = useState(false);
    
    const [ open, setOpen] = useState(false);
    const [ orderNumber, setOrderNumber ] = useState('');

    const [ location, setLocation ] = useState('');
    const [ locationList, setLocationList ] = useState({ en: [], zh: [] });

    const [ contact, setContact ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ cardExp, setCardExp ] = useState('');

    const [ discountCodes, setDiscountCodes ] = useState([]);
    const [ discount, setDiscount ] = useState(0);

    useEffect(() => {
        setOrderNumber(generateOrderNumber());
        getPickupLocations('italian-tomato').then(content => setLocationList(content));
        getDiscountCodes().then(content => setDiscountCodes(content));
    }, []);

    // change quantity by inputs (input onfocus)
    const editQuantity = (index, quantity) => {
        dispatch({
            type: 'UPDATE_CART',
            item: {
                ...cart[index],
                quantity: quantity,
            }
        });
    };

    // change quantity by inputs (input onblur)
    const checkQuantityInput = (index) => {
        dispatch({
            type: 'UPDATE_CART',
            item: {
                ...cart[index],
                quantity: Math.max(1, Math.min(cart[index].quantity, 10)),
            }
        });
    };

    // change quantity by buttons
    const changeQuantity = (index, quantity) => {
        if (quantity < 1)
            return;

        if (quantity > 10)
            return;

        dispatch({
            type: 'UPDATE_CART',
            item: {
                ...cart[index],
                quantity: quantity,
            }
        });
    };

    // remove itam
    const removeItem = (index) => {
        dispatch({
            type: 'REMOVE_CART',
            item: cart[index],
        });
    };

    // place order
    const placeOrder = () => {
        setOpen(true);
        dispatch({ type: 'EMPTY_CART' });
    };

    // check coupon code
    const checkDiscount = (code) => {
        const temp = discountCodes.find(item => item.code.toUpperCase() === code.toUpperCase());

        if (temp)
            setDiscount(temp.unit === '%' ? getSubtotal(cart) * temp.value / 100 : temp.value);
        else 
            setDiscount(0);
    };

    return (
        <div style={{ height: `${height}px`, width: '100vw', overflow: sidebar ? 'hidden' : 'visible', display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>Italian Tomato | Checkout</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header open={sidebar} setOpen={setSidebar} />

            <main className={styles.container}>

                {/* review orders */}
                <section className={styles.review}>
                    <h1>1. {translate('review_order')}</h1>

                    {/* items */}
                    <table items={cart.length === 0 ? 'empty' : 'filled'}>
                        <thead>
                            <tr className={styles.reviewHeader}>
                                <th>{translate('product')}</th>
                                <th>{translate('size')}</th>
                                <th>{translate('quantity')}</th>
                                <th>{translate('cost')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, i) => (
                                <tr key={item.id + item.uuid} className={styles.reviewContent}>
                                    <td>
                                        <img src='https://firebasestorage.googleapis.com/v0/b/italian-tomato-dc5fd.appspot.com/o/cakes%2Fgateau-aux-fraises%2Fgateau-aux-fraises-15cm.jpg?alt=media&token=83b9bae6-e3bd-4905-bf0c-9721d3a66a00' alt='gateau-aux-fraises' />
                                        <div>
                                            <h4>{item.name || 'abc'}</h4>
                                            <p mode='faded'>{item.message || 'No birthday message'}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item.size || '21 cm'}</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span onClick={() => changeQuantity(i, parseInt(item.quantity || 0) - 1)}><MinusCircle width={iconSize} /></span>
                                            <input type='text' value={item.quantity} onChange={(e) => editQuantity(i, e.target.value)} onBlur={() => checkQuantityInput(i)} />
                                            <span onClick={() => changeQuantity(i, parseInt(item.quantity || 0) + 1)}><PlusCircle width={iconSize} /></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p>HK$ {formatCurrency(item.price * item.quantity || 0)}</p>
                                    </td>
                                    <td>
                                        <span onClick={() => removeItem(i)}><X width={iconSize} /></span>
                                    </td>
                                </tr>
                            ))}
                            {cart.length === 0 && <tr className={styles.reviewEmpty}><td colSpan={5}><h6 weight='medium' hoverable='false'>{translate('empty_cart').toUpperCase()}</h6></td></tr>}
                        </tbody>
                    </table>

                    {/* summary */}
                    <div className={styles.reviewSummary}>
                        <div>
                            <div>
                                <h4>{translate('membership')}:</h4>
                                <input type='text' placeholder={translate('membership_placeholder')} />
                            </div>
                            <div>
                                <h4>{translate('coupon')}:</h4>
                                <input type='text' placeholder={translate('coupon_placeholder')} onBlur={(e) => checkDiscount(e.target.value)} />
                            </div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>{translate('subtotal')}:</th>
                                    <td><p>HK$ {formatCurrency(getSubtotal(cart))}</p></td>
                                </tr>
                                <tr>
                                    <th>{translate('discount')}:</th>
                                    <td><p>HK$ {formatCurrency(discount)}</p></td>
                                </tr>
                                <tr>
                                    <th>{translate('total')}:</th>
                                    <td><p>HK$ {formatCurrency(getSubtotal(cart) - discount)}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* pickup */}
                <section className={styles.pickup}>
                    <h1 color='alt'>2. {translate('pickup_arrangement')}</h1>
                    
                    <div className={styles.pickupNotice}>
                        <p weight='bold' mode='important'>{translate('notice_title').toUpperCase()}:</p>
                        <p mode='important'>{translate('notice_message')}</p>
                    </div>

                    <div className={styles.pickupInput}>
                        <div>
                            <h4>{translate('name').toUpperCase()}:</h4>
                            <input type='text' placeholder={translate('name_placeholder')} />
                        </div>
                        <div>
                            <h4>{translate('contact').toUpperCase()}:</h4>
                            <input 
                                type='text' 
                                value={contact} 
                                placeholder={translate('contact_placeholder')} 
                                onChange={(e) => setContact(formatPhone(contact, e.target.value))} 
                            />
                        </div>
                        <div>
                            <h4>{translate('email').toUpperCase()}:</h4>
                            <input type='email' placeholder={translate('email_placeholder')} />
                        </div>
                        <div>
                            <h4>{translate('store').toUpperCase()}:</h4>
                            <Dropdown 
                                content={intl.locale === 'en' ? locationList.en : locationList.zh} 
                                value={location} 
                                placeholder={translate('store_placeholder')} 
                                searchable={true} 
                                needTranslate={false} 
                                mode='disguise' 
                                onChange={setLocation} 
                            />
                        </div>
                        <div>
                            <h4>{translate('date').toUpperCase()}:</h4>
                            <input type='date' />
                        </div>
                        <div>
                            <h4>{translate('time').toUpperCase()}:</h4>
                            <input type='time' />
                        </div>
                    </div>
                </section>
                
                {/* payments */}
                <section className={styles.payment}>
                    <h1>3. {translate('payment')}</h1>

                    <div>
                        <div>
                            <h4>{translate('card_name').toUpperCase()}:</h4>
                            <input type='text' placeholder={translate('card_name_placeholder')} />
                        </div>
                        <div>
                            <h4>{translate('card_number').toUpperCase()}:</h4>
                            <input 
                                type='text' 
                                value={cardNumber}
                                placeholder={translate('card_number_placeholder')} 
                                onChange={(e) => setCardNumber(formatCreditCard('number', cardNumber, e.target.value))} 
                            />
                        </div>
                        <div>
                            <h4>{translate('exp').toUpperCase()}:</h4>
                            <input 
                                type='email'
                                value={cardExp} 
                                placeholder={translate('exp_placeholder')} 
                                onChange={(e) => setCardExp(formatCreditCard('exp', cardExp, e.target.value))} 
                            />
                        </div>
                        <div>
                            <h4>{translate('cvc').toUpperCase()}:</h4>
                            <input type='text' placeholder={translate('cvc_placeholder')} />
                        </div>
                    </div>
                </section>

                {/* buttons */}
                <section className={styles.buttons}>
                    <ArrowLink text='continue_shopping' redirectTo={'/shop'} />
                    <button onClick={() => placeOrder()}>{translate('place_order')}</button>
                </section>
            </main>

            {/* screen cover */}
            <div className='screenCover' style={{ height: `${height}px`, opacity: open ? '1' : '0', zIndex: open ? '1' : '-1' }} />

            {/* modal */}
            <CheckoutModal id={orderNumber} open={open} setOpen={setOpen} />

            <Footer />
        </div>
    );
}

export default Checkout;
