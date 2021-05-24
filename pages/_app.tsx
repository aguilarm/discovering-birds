import React from 'react';
import { AppProps } from 'next/app';

import 'global-styles/all.scss';
import Head from 'next/head';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Disocovering Birds</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?&family=Tangerine:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
