import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Globe, ArrowLeft, X } from 'react-feather';

import { translate } from '../resources/Translations';
import styles from '../styles/components/Sidebar.module.css';

// TODO: routing

function Sidebar({ open, setOpen }) {
    const iconSize = 18;
    const iconSizeLarge = 22;
    
    const router = useRouter();
    
    const [ submenu, setSubmenu ] = useState(0);
    const [ openSubmenu, setOpenSubmenu ] = useState(false);
    
    useEffect(() => {
        setOpenSubmenu(open ? openSubmenu : false);
    }, [open]);

    const onClickSubmenu = (menu) => {
        setSubmenu(menu);
        setOpenSubmenu(true);
    };

    return (
        <div className={styles.container} style={{ right: open ? '0' : '-420px' }}>
            <div>
                <h5 onClick={() => setOpenSubmenu(false)} style={{ visibility: openSubmenu ? 'visible' : 'hidden', opacity: openSubmenu ? '1' : '0' }}>
                    <ArrowLeft width={iconSizeLarge} />
                </h5>
                <h5 onClick={() => setOpen(false)}>
                    <X width={iconSizeLarge} />
                </h5>
            </div>

            <div className={styles.searchBar}>
                <Search width={iconSize} />
                <input background='transparent' decoration='none' type='text' placeholder='Enter text' />
            </div>
            
            <nav className={styles.navigations}>
                <h5>{translate('header.shop')}</h5>
                <h5>{translate('header.locations')}</h5>
                <h5>{translate('header.brands')}</h5>
                <h5>{translate('header.contact')}</h5>
                <h5 onClick={() => onClickSubmenu(0)}>
                    <span><ShoppingCart width={iconSize} /></span>
                    {translate('header.shopping_cart')}
                </h5>
                <h5 onClick={() => onClickSubmenu(1)}>
                    <span><Globe width={iconSize} /></span>
                    {translate('header.language')}
                </h5>
            </nav>

            <div className={styles.submenu} style={{ right: open && openSubmenu ? '0' : '-420px' }}>
                {submenu === 0 ? 
                    <div className={styles.shoppingCart}>
                        <h2 color='alt'>{translate('header.shopping_cart')}</h2>
                        
                        {/* TODO: after implement the shopping cart system */}

                        <button>Checkout</button>
                    </div>
                    :
                    <div className={styles.language}>
                        <h2 color='alt'>{translate('header.language')}</h2>
                        <h5 weight='medium'>English</h5>
                        <h5 weight='medium'>中文</h5>
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar;
