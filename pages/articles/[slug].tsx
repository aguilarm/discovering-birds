import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import ArticlePage, {
  ArticlePageProps,
} from 'components/pages/ArticlePage/ArticlePage';
import { AllArticleSlugs, getArticleBySlug } from 'lib/server/content/content';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: AllArticleSlugs.map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = ({
  params,
}) => {
  if (!params.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const articleContents = getArticleBySlug(params.slug);
  if (!articleContents) {
    return {
      notFound: true,
    };
  }

  return {
    props: articleContents,
  };
};

const ServerArticlePage: React.FC<ArticlePageProps> = (props) => {
  return <ArticlePage {...props} />;
};

export default ServerArticlePage;
