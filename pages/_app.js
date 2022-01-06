import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

import { StateWrapper } from '../utilities/StateContext';
import { initialState, StateReducer } from '../utilities/StateReducer';

import * as translations from '../translations/dictionary/';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	const { locale, defaultLocale, pathname } = useRouter();

	const index = pathname.indexOf('/', 1);
	const path = pathname.substring(0, index);

	const language = translations[locale];
	const content = language[index > 0 ? path : pathname];

	return (
		<StateWrapper reducer={StateReducer} initialState={initialState}>
			<IntlProvider locale={locale} defaultLocale={defaultLocale} messages={content}>
				<Component {...pageProps} />
			</IntlProvider>
		</StateWrapper>
	);
}

export default App;
