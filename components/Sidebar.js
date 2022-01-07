import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Globe, ArrowLeft, X } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Sidebar.module.css';

import Cart from './Cart';
import Language from './Language';

function Sidebar({ open, setOpen }) {
    const router = useRouter();

    const iconSize = 18;
    const iconSizeLarge = 22;
    
    const [ submenu, setSubmenu ] = useState(0);
    const [ openSubmenu, setOpenSubmenu ] = useState(false);
    
    // update open submenu
    useEffect(() => {
        setOpenSubmenu(open ? openSubmenu : false);
    }, [open]);

    // on open submenu
    const onClickSubmenu = (menu) => {
        setSubmenu(menu);
        setOpenSubmenu(true);
    };

    // close sidebar
    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container} style={{ right: open ? '0' : '-520px' }}>
            
            {/* back and close buttons */}
            <div>
                <h5 onClick={() => setOpenSubmenu(false)} style={{ visibility: openSubmenu ? 'visible' : 'hidden', opacity: openSubmenu ? '1' : '0' }}>
                    <ArrowLeft width={iconSizeLarge} />
                </h5>
                <h5 onClick={() => setOpen(false)}>
                    <X width={iconSizeLarge} />
                </h5>
            </div>

            {/* search bar */}
            <div className={styles.searchBar}>
                <Search width={iconSize} />
                <input background='transparent' decoration='none' type='text' placeholder='Enter text' />
            </div>
            
            {/* navigations */}
            <nav className={styles.navigations}>
                <h5 onClick={() => router.push('/shop')}>{translate('header.shop')}</h5>
                <h5 onClick={() => router.push('/locations')}>{translate('header.locations')}</h5>
                <h5 onClick={() => router.push('/our-brands')}>{translate('header.brands')}</h5>
                <h5 onClick={() => router.push('/contact-us')}>{translate('header.contact')}</h5>
                <h5 onClick={() => onClickSubmenu(0)}>
                    <span><ShoppingCart width={iconSize} /></span>
                    {translate('header.shopping_cart')}
                </h5>
                <h5 onClick={() => onClickSubmenu(1)}>
                    <span><Globe width={iconSize} /></span>
                    {translate('header.language')}
                </h5>
            </nav>

            {/* submenu */}
            <div className={styles.submenu} style={{ right: open && openSubmenu ? '0' : '-420px' }}>
                {submenu === 0 ? <Cart mode='sidebar' close={closeSidebar} /> : <Language mode='sidebar' close={closeSidebar} />}
            </div>
        </div>
    );
}

export default Sidebar;
