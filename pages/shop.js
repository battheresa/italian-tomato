import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Search } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/Shop.module.css';

import { getProducts, getProductsByTag, getPromotions } from './api/services';
import { useWindowDimensions } from '../utilities/customHooks';
import { useStateContext } from '../utilities/StateContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Checkbox, Dropdown } from '../components/Utilities';
import PromoCarousel from '../components/PromoCarousel';
import ProductCard from '../components/ProductCard';

function Shop() {
    const { width, height } = useWindowDimensions();
    const [ { allProducts }, dispatch ] = useStateContext();

    const [ sidebar, setSidebar ] = useState(false);
    
    const [ menu, setMenu ] = useState({ label: 'all', tag: 'all', value: 0 });
    const menuList = [ 
        { label: 'all', tag: 'all', value: 0 },
        { label: 'cream_cake', tag: 'cream-cake', value: 1 },
        { label: 'cheese_cake', tag: 'cheese-cake', value: 2 },
        { label: 'chocolate_cake', tag: 'chocolate-cake', value: 3 },
        { label: 'mousse', tag: 'mousse', value: 4 },
        { label: 'tart', tag: 'tart', value: 5 },
    ];

    const [ checklist1, setChecklist1 ] = useState(false);
    const [ checklist2, setChecklist2 ] = useState(false);
    const [ checklist3, setChecklist3 ] = useState(false);
    const [ checklist4, setChecklist4 ] = useState(false);

    const [ promotions, setPromotions ] = useState(undefined);
    const [ products, setProducts ] = useState(new Array(12).fill(undefined)); 

    // get initial product list
    useEffect(() => {
        getPromotions('active').then(content => setPromotions(content));
        getProducts().then(content => setProducts(content));
    }, []);

    // update product list
    useEffect(async () => {
        let tProducts = menu.value === 0 ? await getProducts() : await getProductsByTag(menu.tag);

        if (!checklist1 && !checklist2 && !checklist3 && !checklist4) {
            setProducts(tProducts);
            return;
        }

        let sProducts = [];
        
        if (checklist1)
            sProducts = sProducts.concat(tProducts.filter(item => item.sizes.includes('21 cm')));

        if (checklist2)
            sProducts = sProducts.concat(tProducts.filter(item => item.sizes.includes('15 cm')));

        if (checklist3)
            sProducts = sProducts.concat(tProducts.filter(item => item.sizes.includes('13 cm')));

        if (checklist4)
            sProducts = sProducts.concat(tProducts.filter(item => item.sizes.includes('11 cm')));
    
        setProducts([ ...new Set(sProducts) ]);
    }, [menu, checklist1, checklist2, checklist3, checklist4]);

    // reset checklist
    const resetChecklist = () => {
        setChecklist1(false);
        setChecklist2(false);
        setChecklist3(false);
        setChecklist4(false);
    };

    return (
        <div style={{ height: `${height}px`, width: '100vw', overflow: sidebar ? 'hidden' : 'visible' }}>
            <Head>
                <title>Italian Tomato | Shop</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header open={sidebar} setOpen={setSidebar} />

            <main className={styles.container}>
                
                {/* promotions */}
                <section className={styles.carousel}>
                    <PromoCarousel promotions={promotions} />
                </section>

                <section className={styles.shop}>

                    {/* cake type */}
                    <div className={styles.cakeType} mode='largeScreen'>
                        <h5 onClick={() => setMenu(menuList[0])} status={menu.value === 0 ? 'active' : ''}>{translate('all')}</h5>
                        <h5 onClick={() => setMenu(menuList[1])} status={menu.value === 1 ? 'active' : ''}>{translate('cream_cake')}</h5>
                        <h5 onClick={() => setMenu(menuList[2])} status={menu.value === 2 ? 'active' : ''}>{translate('cheese_cake')}</h5>
                        <h5 onClick={() => setMenu(menuList[3])} status={menu.value === 3 ? 'active' : ''}>{translate('chocolate_cake')}</h5>
                        <h5 onClick={() => setMenu(menuList[4])} status={menu.value === 4 ? 'active' : ''}>{translate('mousse')}</h5>
                        <h5 onClick={() => setMenu(menuList[5])} status={menu.value === 5 ? 'active' : ''}>{translate('tart')}</h5>
                    </div>
                    <div className={styles.cakeType} mode='smallScreen'>
                        <Dropdown content={menuList} value={menu} searchable={false} needTranslate={true} onChange={setMenu} />
                    </div>

                    {/* cake size */}
                    <div className={styles.filter}>
                        <div>
                            <p>{translate('size')}:</p>
                            <div>
                                <Checkbox label='21 cm' checked={checklist1} onChange={setChecklist1} />
                                <Checkbox label='15 cm' checked={checklist2} onChange={setChecklist2} />
                                <Checkbox label='13 cm' checked={checklist3} onChange={setChecklist3} />
                                <Checkbox label='11 cm' checked={checklist4} onChange={setChecklist4} />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => resetChecklist()}>{translate('reset')}</button>
                        </div>
                    </div>
                    

                    {/* products */}
                    <div className={styles.products} style={{ display: products.length === 0 ? 'flex' : 'grid' }}>
                        <h1 status={products.length === 0 ? 'show' : 'hide'}>{translate('error')}</h1>
                        {products.map((item, i) => (
                            <ProductCard key={item?.id || i} product={item} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Shop;
