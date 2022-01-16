import Head from 'next/head';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { useState, useEffect } from 'react';

import ItalianTomato from '../public/brands/italian-tomato.png';
import ItalianTomatoBw from '../public/brands/italian-tomato-bw.png';
import TomatoCafe from '../public/brands/tomato-cafe.png';
import TomatoCafeBw from '../public/brands/tomato-cafe-bw.png';
import CafeGrill from '../public/brands/cafe-grill.png';
import CafeGrillBw from '../public/brands/cafe-grill-bw.png';
import FariBeurre from '../public/brands/fari-beurre.png';
import FariBeurreBw from '../public/brands/fari-beurre-bw.png';
import Wasabou from '../public/brands/wasabou.png';
import WasabouBw from '../public/brands/wasabou-bw.png';

import { translate } from '../translations/Translations';
import styles from '../styles/Locations.module.css';

import { getLocationsByBrand } from './api/services';
import { useWindowDimensions } from '../utilities/customHooks';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Dropdown } from '../components/Utilities';
import LocationModal from '../components/LocationModal';

function Locations() {
    const intl = useIntl();
    const { width, height } = useWindowDimensions();
    const brands = ['italian-tomato', 'tomato-cafe', 'cafe-grill', 'fari-beurre', 'wasabou'];

    const [ sidebar, setSidebar ] = useState(false);
    const [ open, setOpen ] = useState(false);
    
    const [ menu, setMenu ] = useState(0);
    const [ locations, setLocations ] = useState([]);
    const [ selectedLocation, setSelectedLocation ] = useState();

    const [ dropdown, setDropdown ] = useState({ label: 'Italian Tomato', value: 0 });
    const brandsDropdown = [ 
        { label: 'Italian Tomato', value: 0 },
        { label: 'Italian Tomato Café', value: 1 },
        { label: 'Cafe & Grill Italian Tomato', value: 2 },
        { label: 'Fari Beurre', value: 3 },
        { label: 'Wasabou Kamakura Yumemiya', value: 4 },
    ];
    
    // update locations list on change menu
    useEffect(() => {
        getLocationsByBrand(brands[menu]).then(content => setLocations(content));
    }, [menu]);
    
    // update menu on change dropdown (small screen)
    useEffect(() => {
        setMenu(dropdown.value);
    }, [dropdown]);

    // open location modal
    const openModal = (location) => {
        setOpen(true);
        setSelectedLocation(location);
    };

    return (
        <div style={{ height: `${height}px`, width: '100vw', overflow: sidebar ? 'hidden' : 'visible', display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>Italian Tomato | Locations</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header open={sidebar} setOpen={setSidebar} />
            
            <main className={styles.container}>
                <h1>{translate('page_title')}</h1>

                {/* logos */}
                <section className={styles.logos} mode='images'>
                    <div onClick={() => setMenu(0)}>
                        <Image src={ItalianTomatoBw} alt='italian-tomato' />
                        {menu === 0 && <span><Image src={ItalianTomato} alt='italian-tomato' /></span>}
                    </div>
                    <div onClick={() => setMenu(1)}>
                        <Image src={TomatoCafeBw} alt='italian-tomato-cafe' />
                        {menu === 1 && <span><Image src={TomatoCafe} alt='italian-tomato-cafe' /></span>}
                    </div>
                    <div onClick={() => setMenu(2)}>
                        <Image src={CafeGrillBw} alt='cafe-and-grill-italian-tomato' />
                        {menu === 2 && <span><Image src={CafeGrill} alt='cafe-and-grill-italian-tomato' /></span>}
                    </div>
                    <div onClick={() => setMenu(3)}>
                        <Image src={FariBeurreBw} alt='fari-beurre' />
                        {menu === 3 && <span><Image src={FariBeurre} alt='fari-beurre' /></span>}
                    </div>
                    <div onClick={() => setMenu(4)}>
                        <Image src={WasabouBw} alt='wasabou-kamakur-yumemiya' />
                        {menu === 4 && <span><Image src={Wasabou} alt='wasabou-kamakur-yumemiya' /></span>}
                    </div>
                </section>

                {/* dropdown */}
                <section className={styles.logos} mode='text'>
                    <Dropdown content={brandsDropdown} value={dropdown} placeholder='' searchable={false} onChange={setDropdown} />
                </section>

                {/* locations */}
                <section className={styles.locations}>
                    <div>
                        <h4>{translate('kowloon')}</h4>
                        <div className={styles.list}>
                            {locations.filter(item => item.region === 'kowloon').length === 0 && <p mode='faded'>{translate('none').toUpperCase()}</p>}
                            {locations.filter(item => item.region === 'kowloon').map(item => (
                                <div key={item.id} onClick={() => openModal(item)}>
                                    <p>{intl.locale === 'en' ? item.name.toUpperCase() : item.name_zh}</p>
                                    <p mode='faded'>{item.brand.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4>{translate('new_territories')}</h4>
                        <div className={styles.list}>
                            {locations.filter(item => item.region === 'new-territories').length === 0 && <p mode='faded'>{translate('none').toUpperCase()}</p>}
                            {locations.filter(item => item.region === 'new-territories').map(item => (
                                <div key={item.id} onClick={() => openModal(item)}>
                                    <p>{intl.locale === 'en' ? item.name.toUpperCase() : item.name_zh}</p>
                                    <p mode='faded'>{item.brand.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4>{translate('hk_island')}</h4>
                        <div className={styles.list}>
                            {locations.filter(item => item.region === 'hk-island').length === 0 && <p mode='faded'>{translate('none').toUpperCase()}</p>}
                            {locations.filter(item => item.region === 'hk-island').map(item => (
                                <div key={item.id} onClick={() => openModal(item)}>
                                    <p>{intl.locale === 'en' ? item.name.toUpperCase() : item.name_zh}</p>
                                    <p mode='faded'>{item.brand.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* screen cover */}
            <div className='screenCover' onClick={() => setOpen(false)} style={{ height: `${height}px`, opacity: open ? '1' : '0', zIndex: open ? '1' : '-1' }} />

            {/* modal */}
            <LocationModal location={selectedLocation} open={open} setOpen={setOpen} />

            <Footer />
        </div>
    );
}

export default Locations;
