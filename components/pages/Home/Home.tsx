import React from 'react';
import styles from './Home.module.scss';
import { MetaData } from 'lib/types';
import Link from 'next/link';
import AgedPhoto from "components/atoms/AgedPhoto/AgedPhoto";
import classnames from 'classnames';

export interface HomeProps {
  mostRecentArticles: MetaData[];
  homepageCopy: string;
}

const Home: React.FC<HomeProps> = ({ mostRecentArticles, homepageCopy }) => (
  <>
    <main className={styles.main}>
      <section className={styles.homeHero}>
        <AgedPhoto position={'100% 50%'} priority={true} imageSrc={'/assets/hero-images/red-shouldered-hawk.jpg'} altText={'Red shouldered hawk'} />
        <h1>Discovering <br /> Birds</h1>
      </section>
      <section className={classnames(styles.sectionIntro, styles.section)} dangerouslySetInnerHTML={{__html: homepageCopy}}>
      </section>
      <section className={styles.section}>
        {mostRecentArticles.map((article) => (
          <Link href={article.path} key={article.path}>
            <a>
          <div  className={styles.articleTeaserContainer}>
            <div className={styles.articleTeaser}>
              <AgedPhoto className={styles.articleTeaserPhoto} imageSrc={article.heroImageSrc} altText={article.heroImageAlt} />
              <div className={styles.articleTeaserContents}>
                <h1>
                    {article.title}
                </h1>
                <span>{article.subTitle}</span>
              </div>
            </div>
          </div>
          </a>
          </Link>
        ))}
      </section>
      <section className={styles.section}>

      </section>
    </main>
  </>
);

export default Home;
