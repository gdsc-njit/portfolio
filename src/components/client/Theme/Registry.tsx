'use client'

import createTheme from '@mui/material/styles/createTheme';
import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import * as React from 'react';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { GoogleTheme } from './theme';
import { THEME } from './theme';

/**
 * From MUI Starter Code
 * @property {React.ReactNode} children
 *
 * @see https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs/src/components/ThemeRegistry/ThemeRegistry.js
 */
export const ThemeRegistry = ({ children }: any) => {

	const theme = React.useMemo(
		() =>
			createTheme(
				GoogleTheme({
					mode: THEME.LIGHT,
				})
			),
		[]
	);

	React.useEffect(() => {
		document.body.classList.remove('dark');
		document.body.classList.remove('light');
		document.body.classList.add(theme.palette.mode);
	}, [theme.palette.mode]);

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
};