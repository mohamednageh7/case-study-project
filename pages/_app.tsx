// import Head from "next/head";
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import { Direction, PaletteMode } from '@mui/material';
import themeConfig from '../src/styles/theme';
import { createContext, useMemo, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import '../src/styles/global.scss';
import Navbar from '../src/components/navbarCom/Navbar';

export const AppContext = createContext<any>({});

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [mode, setMode] = useState<PaletteMode>('light');
  const [direction, setDirection] = useState<Direction>('ltr');

  const theme: any = useMemo(
    () => createTheme(themeConfig(mode, direction)),
    [mode, direction]
  );
  const largPcMatch: boolean = useMediaQuery(theme.breakpoints.down('xl')); // 1800px
  const minPcMatch: boolean = useMediaQuery(theme.breakpoints.down('lg')); // 1290px
  const smallPcMatch: boolean = useMediaQuery(theme.breakpoints.down('md')); // 1174px
  const mobileMatch: boolean = useMediaQuery(theme.breakpoints.down('sm')); //894px

  const value = useMemo(() => {
    return {
      theme,
      minPcMatch,
      smallPcMatch,
      largPcMatch,
      mobileMatch,
      setDirection,
    };
  }, [theme, minPcMatch, smallPcMatch, largPcMatch, mobileMatch, setDirection]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Innoscripta Test</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppContext.Provider value={value}>
          <Navbar />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
