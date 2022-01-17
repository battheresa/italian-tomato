import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { getProductImagesById } from '../pages/api/services';

import Loading from '../public/dummy/product-loading.png';
import styles from '../styles/components/ProductCard.module.css';

function ProductCard({ product }) {
    if (!product) {
        return (
            <div className={styles.container}>
                <div><Image src={Loading} alt='product-loading' /></div>
            </div>
        );
    }

    const intl = useIntl();
    const router = useRouter();

    const size = product?.sizes[0];
    const price = product?.prices.find(item => item.size === size);
    
    const [ images, setImages ] = useState(undefined);

    useEffect(() => {
        getProductImagesById(product.id).then(content => setImages(content));
    }, []);

    return (
        <div className={styles.container} onClick={() => router.push(`/product/${product.id}`)}>
            {images ? <img src={images?.find(item => item.includes(size.replace(' ', '')))} alt={product?.id} /> : <Image src={Loading} alt='product-loading' />}
            <h3>{intl.locale === 'en' ? product?.name : product?.name_zh}</h3>
            <h6>HK$ {price.price}</h6>
        </div>
    );
}

export default ProductCard;
