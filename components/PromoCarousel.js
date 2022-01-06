import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Circle } from 'react-feather';

import Loading from '../public/dummy/banner-loading.png';
import styles from '../styles/components/PromoCarousel.module.css';

import { deviceBreakpoints } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';

function PromoCarousel({ promotions }) {
    if (!promotions) {
        return (
            <div className={styles.container}>
                <div className={styles.slide} style={{ display: 'flex' }}>
                    <Image className={styles.image} src={Loading} alt='banner-loading' />
                </div>
            </div>
        );
    } 

    const iconSize = 15;
    const { width, height } = useWindowDimensions();
    const [ slide, setSlide ] = useState(0);

    // auto change slide
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(slide === promotions.length - 1 ? 0 : slide + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [slide]);

    // manually change slide
    const changeSlide = (page) => {
        setSlide(page === promotions.length ? 0 : page === -1 ? promotions.length - 1 : page);
    };

    // get display value
    const getDisplay = (cur, index) => {
        let display = 'none';

        if (index >= cur - 1 && index <= cur + 1)
            display = 'flex';

        if ((index === 0 && cur === promotions.length - 1) || (index === promotions.length - 1 && cur === 0))
            display = 'flex';

        return display;
    };

    // get position of each slide
    const getPosition = (cur, index) => {
        let position = (index - cur) * 100;

        if (cur === 0 && index === promotions.length - 1)
            position = -100;
                    
        if (cur === promotions.length - 1 && index === 0)
            position = 100;

        return position;
    };

    return (
        <div className={styles.container}>
            
            {/* content */}
            {promotions.map((item, i) => (
                <div key={item.id} className={styles.slide} style={{ display: getDisplay(slide, i), transform: `translateX(${getPosition(slide, i)}%)` }}>
                    <img className={styles.image} src={width >= deviceBreakpoints.tablet ? item.banner : item.mini} alt={item.id} />
                </div>
            ))}

            {/* pagination */}
            <div className={styles.pagination}>
                {promotions.map((_, i) => (
                    <span key={i} onClick={() => changeSlide(i)}>
                        <Circle width={iconSize} color='var(--mediumGreen)' fill={`var(${slide === i ? '--mediumGreen' : '--transparent'})`} style={{ transition: '0.5s'}} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PromoCarousel;
