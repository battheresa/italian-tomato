import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import * as translations from '../resources/translations/';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const { locale, defaultLocale, pathname, asPath } = useRouter();

	const index = pathname.indexOf('/', 1);
	const path = pathname.substring(0, index);

	const language = translations[locale];
	const content = language[index > 0 ? path : pathname];

	return (
		<IntlProvider locale={locale} defaultLocale={defaultLocale} messages={content}>
			<Component {...pageProps} />
		</IntlProvider>
	);
}

export default MyApp
