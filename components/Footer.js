import { Facebook, Instagram } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Footer.module.css';

import { deviceBreakpoints } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';

function Footer() {
    const iconSize = 22;
    const { width, height } = useWindowDimensions();

    return (
        <div className={styles.container}>
            
            {/* social media icon */}
            {width < deviceBreakpoints.mobile && <div className={styles.icons}>
                <a deco='none' href='https://www.facebook.com/ItalianTomatoHongKong/' target='_blank' rel='noreferrer'>
                    <p mode='footer'><Facebook width={iconSize} /></p>
                </a>
                <a deco='none' href='https://www.instagram.com/italiantomatohongkong/' target='_blank' rel='noreferrer'>
                    <p mode='footer'><Instagram width={iconSize} /></p>
                </a>
            </div>}

            {/* copyright */}
            <p mode='footer'>&copy; {translate('footer.copyright')}</p>

            {/* social media icon */}
            {width >= deviceBreakpoints.mobile && <div className={styles.icons}>
                <a deco='none' href='https://www.facebook.com/ItalianTomatoHongKong/' target='_blank' rel='noreferrer'>
                    <p mode='footer'><Facebook width={iconSize} /></p>
                </a>
                <a deco='none' href='https://www.instagram.com/italiantomatohongkong/' target='_blank' rel='noreferrer'>
                    <p mode='footer'><Instagram width={iconSize} /></p>
                </a>
            </div>}
        </div>
    );
}

export default Footer;
