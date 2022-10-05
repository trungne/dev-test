import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { Provider } from "react-redux";
import { wrapper } from 'store/store';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <Component {...props?.pageProps} />
      </Provider>
    </MantineProvider>
  )
}

export default MyApp
