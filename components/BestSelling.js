import { useState, useEffect } from 'react';

import { translate } from '../translations/Translations';
import styles from '../styles/components/BestSelling.module.css';

import { getProductsByTag } from '../pages/api/services';
import ProductCard from '../components/ProductCard';

function BestSelling() {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByTag('best-selling').then(content => setProducts(content));
    }, []);

    return (
        <section className={styles.container}>
            <h4 deco='underline'>{translate('best_selling')}</h4>
            <div>
                <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
                <ProductCard product={products[2]} />
                <ProductCard product={products[3]} />
            </div>
        </section>
    );
}

export default BestSelling;
