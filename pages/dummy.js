import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { translate } from '../resources/Translations';
import { Checkbox, Radio, Dropdown } from '../resources/Element';
import styles from '../styles/Home.module.css';

function Dummy() {
    const router = useRouter();

    const dropdownList = [ 
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ];
    const [ selectedDropdown1, setSelectedDropdown1 ] = useState({ label: '', value: 0 });
    const [ selectedDropdown2, setSelectedDropdown2 ] = useState({ label: '', value: 0 });
    const [ selectedDropdown3, setSelectedDropdown3 ] = useState({ label: '', value: 0 });

    const [ checklist1, setChecklist1 ] = useState(false);
    const [ checklist2, setChecklist2 ] = useState(false);

    const [ selectedRadio, setSelectedRadio ] = useState('one');

    return (
        <div className={styles.container}>
            <Head>
                <title>Template 1</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <section>
                    <h1>{translate('hello')}</h1>
                    <h2>{translate('welcome')}</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>Paragraph</p>
                    <a href='#abc'>link</a>
                </section>

                <section>
                    <button>Button</button>

                    <div style={{ backgroundColor: 'var(--black)', padding: '10px' }}>
                        <button color='primary' variant='contained' onClick={() => router.push('/', '/', { locale: 'en-us' })}>English (US)</button>
                        <button color='primary' variant='outlined' onClick={() => router.push('/', '/', { locale: 'en-uk' })}>English (UK)</button>
                    </div>
                    
                    <div>
                        <button color='secondary' variant='contained' onClick={() => router.push('/', '/', { locale: 'fr' })}>Français</button>
                        <button color='secondary' variant='outlined' onClick={() => router.push('/', '/', { locale: 'es' })}>Español</button>
                    </div>

                    <button color='tertiary'>Button</button>
                    
                    <div>
                        <button color='quaternary'>Button</button>
                        <button color='quaternary' status='active'>Button</button>
                    </div>
                </section>

                <input type='text' placeholder='Enter text' />

                <section>
                    <Dropdown content={dropdownList} value={selectedDropdown1} placeholder='--- Please Select ---' onChange={setSelectedDropdown1} />
                    <Dropdown content={dropdownList} value={selectedDropdown2} placeholder='--- Please Select ---' searchable={false} onChange={setSelectedDropdown2} />
                    <Dropdown content={dropdownList} value={selectedDropdown3} placeholder='Read only' searchable={false} disabled={true} onChange={setSelectedDropdown3} />
                </section>

                <section>
                    <Checkbox label='Checkbox 1' checked={checklist1} onChange={setChecklist1} />
                    <Checkbox label='Checkbox 2' checked={checklist2} onChange={setChecklist2} />
                </section>

                <section>
                    <Radio label='Radio 1' value={'one'} name='radio' checked={selectedRadio} onChange={setSelectedRadio} />
                    <Radio label='Radio 2' value={'two'} name='radio' checked={selectedRadio} onChange={setSelectedRadio} />
                </section>
            </main>

            <footer className={styles.footer}>
                &copy; 2021 Chawisa Lo. All rights reserved.
            </footer>
        </div>
    );
}

export default Dummy;