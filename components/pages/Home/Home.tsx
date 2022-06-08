import React from 'react';
import styles from './Home.module.scss';
import { MetaData } from 'lib/types';
import Link from 'next/link';
import AgedPhoto from 'components/atoms/AgedPhoto/AgedPhoto';
import classnames from 'classnames';
import heroImage from '../../../public/assets/hero-images/red-shouldered-hawk.jpg';
import { MarkdownRenderer } from 'lib/shared/content/content';
import Footer from 'components/organisms/Footer/Footer';
import Head from 'next/head';

export interface HomeProps {
  mostRecentArticles: MetaData[];
  homepageCopyMd: string;
}

const Home: React.FC<HomeProps> = ({ mostRecentArticles, homepageCopyMd }) => (
  <main className={styles.main}>
    <Head>
      <meta
        name={'twitter:image'}
        content={`${
          typeof window !== 'undefined' ? window.location.origin : ''
        }${heroImage.src}`}
      />
    </Head>
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
    <section className={styles.section}>
      <h1>Organizations</h1>
      <p>
        Looking to get involved and make a positive impact on birds? Check out
        these organizations.
      </p>
      <ul className={styles.organizations}>
        <li>
          <h2>
            <a href={'https://www.ebird.org'}>eBird</a>
          </h2>
          <p>
            Participate in a massive citizen-science project to track bird
            throughout the world.
          </p>
        </li>
        <li>
          <h2>
            <a href={'https://www.audubon.org'}>Audubon</a>
          </h2>
          <p>
            Explore and conserve birds in the United States with hundreds of
            local chapters.
          </p>
        </li>
        <li>
          <h2>
            <a href={'https://www.aba.org'}>American Birding Association</a>
          </h2>
          <p>
            The ABA is focused on expanding the hobby of birding with a range of
            publications including Birding Magazine, an excellent podcast, and
            an extensive checklist for the area.
          </p>
        </li>
        <li>
          <h2>
            <a href={'https://abcbirds.org'}>American Bird Conservancy</a>
          </h2>
          <p>
            Working throughout the Americas the ABC works in many ways to
            preserve the places birds call home.
          </p>
        </li>
        <li>
          <h2>
            <a href={'https://www.peregrinefund.org'}>The Peregrine Fund</a>
          </h2>
          <p>
            The Peregrine Fund works to protect all types of birds of prey
            worldwide. This organization has been pivotal in saving Peregrine
            Falcons, California Condors and many others.
          </p>
        </li>
      </ul>
    </section>
    <Footer />
  </main>
);

export default Home;
