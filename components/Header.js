import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Globe, Menu } from 'react-feather';

import LogoFull from '../public/logo-full.png';
import LogoCompact from '../public/logo-compact.png';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Header.module.css';

import { deviceBreakpoints } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';

import Sidebar from './Sidebar';
import AnchorModal from './AnchorModal';

function Header({ open, setOpen }) {
    const iconSize = 18;
    const iconSizeLarge = 22;
    
    const router = useRouter();
    const { width, height } = useWindowDimensions();

    const [ modalMenu, setModalMenu] = useState('');
    const [ openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (!open)
            setOpenModal(false);
    }, [open]);

    const openModalMenu = (mode) => {
        setModalMenu(mode);
        setOpenModal(true);
    };
    
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
                    <h5 onClick={() => openModalMenu('cart')}><ShoppingCart width={iconSize} /></h5>
                    <h5 onClick={() => openModalMenu('language')}><Globe width={iconSize} /></h5>
                </nav>

                {/* hamburger menu */}
                {width < deviceBreakpoints.tablet && <nav>
                    <h5 onClick={() => setOpen(true)}><Menu width={iconSizeLarge} /></h5>
                </nav>}
            </header>

            {/* screen cover */}
            <div className='screenCover' onClick={() => setOpen(false)} style={{ height: `${height}px`, opacity: open ? '1' : '0', zIndex: open ? '9' : '-1' }} />
            <div className='screenCover' onClick={() => setOpenModal(false)} style={{ height: `${height}px`, opacity: openModal && modalMenu === 'cart' ? '1' : '0', zIndex: openModal && modalMenu === 'cart' ? '9' : '-1' }} />
            <div className='screenCover' onClick={() => setOpenModal(false)} style={{ height: `${height}px`, opacity: openModal && modalMenu !== 'cart' ? '1' : '0', zIndex: openModal && modalMenu !== 'cart' ? '9' : '-1', backgroundColor: 'var(--transparent)' }} />

            {/* sidebar */}
            <Sidebar open={open} setOpen={setOpen} />
            
            {/* shopping cart and language */}
            <AnchorModal mode={modalMenu} open={openModal} setOpen={setOpenModal} />
        </div>
    );
}

export default Header;