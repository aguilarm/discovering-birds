import React from 'react';
import Hero from 'components/atoms/Hero/Hero';
import Header from 'components/organisms/Header/Header';
import Article from 'components/organisms/Article/Article';
import { MetaData } from 'lib/types';

export interface ArticlePageProps {
  metaData: MetaData;
  htmlBody: string;
}

const ArticlePage: React.FC<ArticlePageProps> = (props) => (
  <main>
    <Header />
    <Hero src={props.metaData.heroImageSrc} alt={props.metaData.heroImageAlt} />
    <Article {...props} />
  </main>
);

export default ArticlePage;
