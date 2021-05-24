import Home, { HomeProps } from 'components/pages/Home/Home';
import { GetStaticProps } from 'next';
import { getMostRecentArticles } from 'lib/server/content';
import React from 'react';

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const mostRecentArticles = getMostRecentArticles(5);
  return {
    props: {
      mostRecentArticles,
    },
  };
};

const HomePage: React.FC<HomeProps> = (props) => {
  return <Home {...props} />;
};

export default HomePage;
