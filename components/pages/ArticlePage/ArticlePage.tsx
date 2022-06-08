import React from 'react';
import Hero from 'components/atoms/Hero/Hero';
import Header from 'components/organisms/Header/Header';
import Article from 'components/organisms/Article/Article';
import { MetaData } from 'lib/types';
import Footer from 'components/organisms/Footer/Footer';
import Head from 'next/head';

export interface ArticlePageProps {
  metaData: MetaData;
  rawMarkdown: string;
}

const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const {
    metaData: { title, subTitle, heroImageAlt, heroImageSrc },
  } = props;
  return (
    <main>
      <Head>
        <title>{title} | Searching for Birds</title>
        <meta name={'description'} content={subTitle} />
        <meta
          name={'twitter:image'}
          content={`${process.env.NEXT_PUBLIC_HTTP_ORIGIN}${heroImageSrc}`}
        />
      </Head>
      <Header />
      <Hero src={heroImageSrc} alt={heroImageAlt} />
      <Article {...props} />
      <Footer />
    </main>
  );
};

export default ArticlePage;
