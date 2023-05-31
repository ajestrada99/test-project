import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { RTL } from "@/oldVersion/rtl";
import { Toaster } from "@/oldVersion/toaster";
import { SettingsConsumer } from "@/contexts/settings-context";
import { UserContext } from '@/contexts/user-context'
import { createEmotionCache } from "@/utils/create-emotion-cache";
import { gtmConfig } from "@/config";
import { SnackbarProvider } from "notistack";
import { gtm } from "@/libs/gtm";
import { createTheme } from "@/theme";
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
// Remove if nprogress is not used
import "@/libs/nprogress";
// Remove if mapbox is not used
import "@/libs/mapbox";
// Remove if locales are not used
import "@/locales/i18n";
import { msalInstance } from "@/msal.services";
import Login from "@/pages/login";
import { store } from "@/store";
import '@/styles/public.css';
import '@/styles/loading.css';
import "devextreme/dist/css/dx.material.blue.light.compact.css";
import "react-toastify/dist/ReactToastify.css";

const clientSideEmotionCache = createEmotionCache();
const useAnalytics = () => {
  useEffect(() => {
    gtm.initialize(gtmConfig);
  }, []);
};

const App = (props: AppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useAnalytics();
  const getLayout = Component.getLayout ?? ((page) => page);



  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Foragro platform</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MsalProvider instance={msalInstance}>
        <ReduxProvider store={store}>
          <SnackbarProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SettingsConsumer>
                {(settings) => {
                  const theme = createTheme({
                    colorPreset: settings.colorPreset,
                    contrast: settings.contrast,
                    direction: settings.direction,
                    paletteMode: settings.paletteMode,
                    responsiveFontSizes: settings.responsiveFontSizes,
                  });
                  return (
                    <ThemeProvider theme={theme}>
                      <Head>
                        <meta
                          name="color-scheme"
                          content={settings.paletteMode}
                        />
                        <meta
                          name="theme-color"
                          content={theme.palette.neutral[900]}
                        />
                      </Head>
                      <RTL direction={settings.direction}>
                        <CssBaseline />
                        {
                          <>
                            {getLayout(
                              <>
                              <UserContext>
                                <UnauthenticatedTemplate>
                                    <Login />
                                  </UnauthenticatedTemplate>
                                  <AuthenticatedTemplate>
                                    <Component {...pageProps} />
                                  </AuthenticatedTemplate>
                              </UserContext>
                              </>
                            )}
                          </>
                        }
                        <Toaster />
                      </RTL>
                    </ThemeProvider>
                  );
                }}
              </SettingsConsumer>
            </LocalizationProvider>
          </SnackbarProvider>
        </ReduxProvider>
      </MsalProvider>
    </CacheProvider>
  );
};

export default App;
