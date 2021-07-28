import Home, { HomeProps } from 'components/pages/Home/Home';
import { GetStaticProps } from 'next';
import {getMostRecentArticles, parseManagedMdFile} from 'lib/server/content/content';
import React from 'react';

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const mostRecentArticles = getMostRecentArticles(5);
  const { htmlBody: homepageCopy} = parseManagedMdFile('home');
  return {
    props: {
      mostRecentArticles,
      homepageCopy,
    },
  };
};

const HomePage: React.FC<HomeProps> = (props) => {
  return <Home {...props} />;
};

export default HomePage;
