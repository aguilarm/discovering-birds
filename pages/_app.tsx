import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import 'global-styles/all.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Searching for Birds</title>
        <meta
          name={'description'}
          content={
            'Discover the world of birds via advocacy, interesting facts, and tutorials.'
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@searchin4birds" />
        <meta name="twitter:title" content="Searching for Birds" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
