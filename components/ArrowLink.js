import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/components/ArrowLink.module.css';

function ArrowLink({ text, redirectTo }) {
    const iconSize = 18;
    const router = useRouter();

    return (
        <div className={styles.container}>
            <a onClick={() => router.push(redirectTo)}>
                <span><ArrowLeft width={iconSize} /></span>
                {translate(text)}
            </a>
        </div>
    );
}

export default ArrowLink;
