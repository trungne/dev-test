import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap" rel="stylesheet"  type='text/css'/>
                    <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;900&display=swap' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}