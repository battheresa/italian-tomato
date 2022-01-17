import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import Loading from '../public/dummy/product-loading.png';
import styles from '../styles/components/ProductCard.module.css';

function ProductCard({ product, sizeFilter }) {
    if (!product) {
        return (
            <div className={styles.container}>
                <div><Image src={Loading} alt='product-loading' /></div>
            </div>
        );
    }

    const intl = useIntl();
    const router = useRouter();
    
    const [ size, setSize ] = useState(product?.sizes[0]);
    const [ price, setPrice ] = useState(product?.prices.find(item => item.size === size));
    const [ image, setImage ] = useState(product?.images.find(item => item.size === size));

    useEffect(() => {
        if (sizeFilter) {
            let nSize = product.sizes[0];

            if (sizeFilter['21 cm'] && product.sizes.includes('21 cm')) 
                nSize = '21 cm';

            if (sizeFilter['15 cm'] && product.sizes.includes('15 cm')) 
                nSize = '15 cm';

            if (sizeFilter['13 cm'] && product.sizes.includes('13 cm')) 
                nSize = '13 cm';

            if (sizeFilter['11 cm'] && product.sizes.includes('11 cm')) 
                nSize = '11 cm';
            
            setSize(nSize);
            setPrice(product.prices.find(item => item.size === nSize));
            setImage(product.images.find(item => item.size === nSize));
        }
    }, [sizeFilter]);

    return (
        <div className={styles.container} onClick={() => router.push(`/product/${product.id}`)}>
            {image ? <img src={image.src} alt={product.id} /> : <Image src={Loading} alt='product-loading' />}
            <h3>{intl.locale === 'en' ? product?.name : product?.name_zh}</h3>
            <h6>HK$ {price?.price || 'NaN'}</h6>
        </div>
    );
}

export default ProductCard;
