import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Search } from 'react-feather';

import { translate } from '../translations/Translations';
import styles from '../styles/components/SearchBar.module.css';

// TODO: route to search page

function SearchBar({ mode, setOpen }) {
    const router = useRouter();
    const iconSize = 18;

    return (
        <form className={styles.container} mode={mode}>
            <Search width={iconSize} />
            <input type='text' background='transparent' decoration='none' placeholder={translate('search_bar')} />
        </form>
    );
}

export default SearchBar;
