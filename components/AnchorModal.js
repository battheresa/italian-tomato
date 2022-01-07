import { useEffect } from 'react';
import styles from '../styles/components/AnchorModal.module.css';

import { deviceBreakpoints } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';

import SearchBar from './SearchBar';
import Cart from './Cart';
import Language from './Language';

function AnchorModal({ mode, open, setOpen }) {
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width < deviceBreakpoints.tablet)
            setOpen(false);
    }, [width]);

    return (
        <div className={styles.container} style={{ visibility: open ? 'visible' : 'hidden' }}>
            <div className={styles.modal} mode={mode}>
                <div style={{ display: open ? 'flex' : 'none' }}>
                    {mode === 'cart' && <Cart mode='modal' setOpen={setOpen} />}
                    {mode === 'language' && <Language mode='modal' setOpen={setOpen} />}
                    {mode === 'search' && <SearchBar mode='modal' setOpen={setOpen} />}
                </div>
            </div>
        </div>
    );
}

export default AnchorModal;
