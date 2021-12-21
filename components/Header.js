import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Globe, Menu, X } from 'react-feather';

import LogoFull from '../public/logo-full.png';
import LogoCompact from '../public/logo-compact.png';

import { translate } from '../resources/Translations';
import styles from '../styles/components/Header.module.css';

import { deviceBreakpoints } from './utilities/config';
import { useWindowDimensions } from './utilities/customHooks';

import Sidebar from './subcomponents/Sidebar';

// TODO: routing

function Header() {
    const iconSize = 18;
    const iconSizeLarge = 22;
    
    const { width, height } = useWindowDimensions();

    const [ open, setOpen ] = useState(false);
    const [ menus, setMenus ] = useState([]);

    return (
        <div>
            <header className={styles.container}>
                {/* logo */}
                <div className={styles.logo}>
                    <Image src={width >= deviceBreakpoints.laptops ? LogoFull : LogoCompact} alt='italian-tomato-logo' />
                </div>

                {/* navigation */}
                <nav className={styles.navigations}>
                    <h5>{translate('header.shop')}</h5>
                    <h5>{translate('header.locations')}</h5>
                    <h5>{translate('header.brands')}</h5>
                    <h5>{translate('header.contact')}</h5>
                    <h5><Search width={iconSize} /></h5>
                    <h5><ShoppingCart width={iconSize} /></h5>
                    <h5><Globe width={iconSize} /></h5>
                </nav>

                {/* hamburger menu */}
                {width < deviceBreakpoints.tablet && <nav>
                    <h5 onClick={() => setOpen(true)}><Menu width={iconSizeLarge} /></h5>
                </nav>}
            </header>

            {/* screen cover */}
            <div className='screenCover' onClick={() => setOpen(false)} style={{ opacity: open ? '1' : '0', zIndex: open ? '0' : '-1' }} />

            {/* sidebar */}
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    );
}

export default Header;