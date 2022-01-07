import styles from '../styles/components/AnchorModal.module.css';

import { useWindowDimensions } from '../utilities/customHooks';

import Cart from './Cart';
import Language from './Language';

function AnchorModal({ mode, open, setOpen }) {
    const { width, height } = useWindowDimensions();

    return (
        <div className={styles.container} style={{ visibility: open ? 'visible' : 'hidden' }}>
            <div className={styles.modal} mode={mode}>
                <div style={{ display: open ? 'flex' : 'none' }}>
                    {mode === 'cart' ? <Cart mode='modal' setOpen={setOpen} /> : <Language mode='modal' setOpen={setOpen} /> }
                </div>
            </div>
        </div>
    );
}

export default AnchorModal;
