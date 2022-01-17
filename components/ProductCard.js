/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import Loading from '../public/dummy/product-loading.png';
import styles from '../styles/components/ProductCard.module.css';

function ProductCard({ product, sizeFilter }) {
    const intl = useIntl();
    const router = useRouter();
    
    const [ price, setPrice ] = useState();
    const [ image, setImage ] = useState();

    useEffect(() => {
        if (product) {
            const nSize = product?.sizes[0];    
            setPrice(product?.prices.find(item => item.size === nSize));
            setImage(product?.images.find(item => item.size === nSize));
        }
    }, [product]);

    useEffect(() => {
        if (product && sizeFilter) {
            let nSize = product.sizes[0];

            if (sizeFilter['21 cm'] && product.sizes.includes('21 cm')) 
                nSize = '21 cm';

            if (sizeFilter['15 cm'] && product.sizes.includes('15 cm')) 
                nSize = '15 cm';

            if (sizeFilter['13 cm'] && product.sizes.includes('13 cm')) 
                nSize = '13 cm';

            if (sizeFilter['11 cm'] && product.sizes.includes('11 cm')) 
                nSize = '11 cm';
            
            setPrice(product.prices.find(item => item.size === nSize));
            setImage(product.images.find(item => item.size === nSize));
        }
    }, [product, sizeFilter]);

    return (
        <div className={styles.container} onClick={() => router.push(`/product/${product.id}`)}>
            {image ? <img src={image.src} alt={product.id} /> : <Image src={Loading} alt='product-loading' />}
            <h3>{intl.locale === 'en' ? product?.name : product?.name_zh}</h3>
            <h6>HK$ {price?.price || 'NaN'}</h6>
        </div>
    );
}

export default ProductCard;
