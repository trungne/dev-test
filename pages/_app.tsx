import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { Provider } from "react-redux";
import { store } from 'store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MantineProvider>
  )
}

export default MyApp
