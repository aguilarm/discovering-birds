import React from 'react';
import styles from './Home.module.scss';
import Hero from 'components/atoms/Hero/Hero';
import Header from 'components/organisms/Header/Header';
import { MetaData } from 'lib/types';
import Link from 'next/link';

export interface HomeProps {
  mostRecentArticles: MetaData[];
}

const Home: React.FC<HomeProps> = ({ mostRecentArticles }) => (
  <>
    <Header />
    <Hero imageIndex={1} />
    <main className={styles.main}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1>Photography</h1>
        </header>
      </section>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1>Articles</h1>
        </header>
        {mostRecentArticles.map((article) => (
          <div key={article.path}>
            <h2>
              <Link href={article.path}>
                <a>{article.title}</a>
              </Link>
            </h2>
            <span>{article.subTitle}</span>
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1>Conservation</h1>
        </header>
      </section>
    </main>
  </>
);

export default Home;
