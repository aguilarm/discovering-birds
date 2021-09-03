import React from 'react';
import styles from './Home.module.scss';
import { MetaData } from 'lib/types';
import Link from 'next/link';
import AgedPhoto from 'components/atoms/AgedPhoto/AgedPhoto';
import classnames from 'classnames';
import heroImage from '../../../public/assets/hero-images/red-shouldered-hawk.jpg';
import { MarkdownRenderer } from 'lib/shared/content/content';

export interface HomeProps {
  mostRecentArticles: MetaData[];
  homepageCopyMd: string;
}

const Home: React.FC<HomeProps> = ({ mostRecentArticles, homepageCopyMd }) => (
  <>
    <main className={styles.main}>
      <section className={styles.homeHero}>
        <AgedPhoto
          position={'center 42%'}
          priority={true}
          imageSrc={heroImage}
          altText={'Red shouldered hawk'}
        />
        <div className={styles.heroText}>
          <div className={styles.heroSearching}>Searching</div>
          <div className={styles.heroFor}>for</div>
          <div className={styles.heroBirds}>Birds</div>
        </div>
      </section>
      <section className={classnames(styles.sectionIntro, styles.section)}>
        {MarkdownRenderer(homepageCopyMd)}
      </section>
      <section className={styles.section}>
        {mostRecentArticles.map((article) => (
          <Link href={article.path} key={article.path}>
            <a>
              <div className={styles.articleTeaserContainer}>
                <div className={styles.articleTeaser}>
                  <AgedPhoto
                    className={styles.articleTeaserPhoto}
                    imageSrc={article.heroImageSrc}
                    altText={article.heroImageAlt}
                    loadImmediately={true}
                  />
                  <div className={styles.articleTeaserContents}>
                    <h1>{article.title}</h1>
                    <span>{article.subTitle}</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.section}></section>
    </main>
  </>
);

export default Home;
