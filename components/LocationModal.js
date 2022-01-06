import { useIntl } from 'react-intl';
import { X, MapPin, Phone, Clock } from 'react-feather';

import styles from '../styles/components/LocationModal.module.css';

import { deviceBreakpoints } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';
import { formatOpening } from '../utilities/customFunctions';

function LocationModal({ location, open, setOpen }) {
    const intl = useIntl();
    const iconSize = 18;
    const { width, height } = useWindowDimensions();

    if (!location)
        return (<div></div>);

    return (
        <div className={styles.container} style={{ visibility: open ? 'visible' : 'hidden' }}>
            <div className={styles.modal}>
                
                {/* map */}
                <div className={styles.map}>
                    {width < deviceBreakpoints.laptops && <div><X onClick={() => setOpen(false)} /></div>}
                    <iframe src={location.map} width='100%' height='100%' style={{ border: 0, borderRadius: '12px' }} allowFullScreen='' />
                </div>

                {/* information */}
                <div className={styles.content}>

                    {/* close button */}
                    {width >= deviceBreakpoints.laptops && <div>
                        <X onClick={() => setOpen(false)} />
                    </div>}

                    {/* shop details */}
                    <div>
                        {/* name */}
                        <div className={styles.header}>
                            <h2>{intl.locale === 'en' ? location.name.toUpperCase() : location.name_zh}</h2>
                            <p mode='faded'>{location.brand.toUpperCase()}</p>
                        </div>

                        {/* address */}
                        <div className={styles.information}>
                            <div>
                                <span><MapPin width={iconSize} /></span>
                                <p>{intl.locale === 'en' ? location.address : location.address_zh}</p>
                            </div>
                            <div>
                                <span><Phone width={iconSize} /></span>
                                <p>{location.phone}</p>
                            </div>
                            <div>
                                <span><Clock width={iconSize} /></span>
                                <p>{formatOpening(1, location.open)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationModal;
