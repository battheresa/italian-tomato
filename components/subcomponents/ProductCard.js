import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Loading from '../../public/dummy/product-loading.png';

import styles from '../../styles/components/subcomponents/ProductCard.module.css';

import { random } from '../utilities/customFunctions';

function ProductCard({ product }) {
    if (!product) {
        return (
            <div className={styles.container}>
                <div><Image src={Loading} alt='product-loading' /></div>
            </div>
        );
    }

    const size = product?.sizes[random(0, product?.sizes.length)];
    const image = product?.images.find(item => item.includes(size.replace(' ', '')));
    const price = product?.prices.find(item => item.size === size);

    return (
        <div className={styles.container}>
            <div><img src={image} alt={product?.id} /></div>

            <h3>{product?.name}</h3>
            <h6>HK$ {price.price}</h6>
        </div>
    )
}

export default ProductCard;
