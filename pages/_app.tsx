import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
// * I18N
import '../lang/index';
// * Fonts
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const { locale } = useRouter();
	const { i18n } = useTranslation();

	React.useEffect(() => {
		i18n.changeLanguage(locale);
	}, [i18n, locale]);

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MyApp;
