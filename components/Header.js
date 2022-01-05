import Image from 'next/image';
import { useRouter } from 'next/router';
import { Search, ShoppingCart, Globe, Menu } from 'react-feather';

import LogoFull from '../public/logo-full.png';
import LogoCompact from '../public/logo-compact.png';

import { translate } from '../resources/Translations';
import styles from '../styles/components/Header.module.css';

import { deviceBreakpoints } from './utilities/config';
import { useWindowDimensions } from './utilities/customHooks';

import Sidebar from './Sidebar';

// TODO: search menu
// TODO: language menu
// TODO: shopping cart menu

function Header({ open, setOpen }) {
    const iconSize = 18;
    const iconSizeLarge = 22;
    
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    return (
        <div>
            <header className={styles.container}>
                {/* logo */}
                <div className={styles.logo} onClick={() => router.push('/')}>
                    <Image src={width >= deviceBreakpoints.laptops ? LogoFull : LogoCompact} alt='italian-tomato-logo' />
                </div>

                {/* navigation */}
                <nav className={styles.navigations}>
                    <h5 onClick={() => router.push('/shop')}>{translate('header.shop')}</h5>
                    <h5 onClick={() => router.push('/locations')}>{translate('header.locations')}</h5>
                    <h5 onClick={() => router.push('/our-brands')}>{translate('header.brands')}</h5>
                    <h5 onClick={() => router.push('/contact-us')}>{translate('header.contact')}</h5>
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
            <div className='screenCover' onClick={() => setOpen(false)} style={{ height: `${height}px`, opacity: open ? '1' : '0', zIndex: open ? '9' : '-1' }} />

            {/* sidebar */}
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    );
}

export default Header;