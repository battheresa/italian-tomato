import { useRouter } from 'next/router';

import { translate } from '../translations/Translations';
import styles from '../styles/components/Language.module.css';

function Language({ mode, setOpen }) {
    const router = useRouter();

    const changeLocale = (locale) => {
        router.push(router.asPath, router.asPath, { locale: locale });
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            {mode === 'sidebar' && <h2 color='alt'>{translate('header.language').toUpperCase()}</h2>}
            <h5 onClick={() => changeLocale('en')}>English</h5>
            <h5 onClick={() => changeLocale('zh')}>中文</h5>
        </div>
    );
}

export default Language;
