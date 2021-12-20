import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { translate } from '../resources/Translations';
import styles from '../styles/Home.module.css';

import { getProductsByTag } from './api/services';

function Home() {
    const router = useRouter();
    const [ products, setProducts ] = useState([]);
    
    useEffect(() => {
        getProductsByTag('best-selling').then(content => setProducts(content));
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Italian Tomato</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
            </main>

            <footer className={styles.footer}>
                &copy; {translate('footer.copyright')}
            </footer>
        </div>
    );
}

export default Home;