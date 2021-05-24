import React from 'react';
import styles from './Article.module.scss';
import { ArticlePageProps } from 'components/pages/ArticlePage/ArticlePage';

const Article: React.FC<ArticlePageProps> = ({
  metaData: { title, subTitle, date },
  htmlBody,
}) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
      </header>
      <main
        className={styles.main}
        dangerouslySetInnerHTML={{ __html: htmlBody }}
      />
    </article>
  );
};

export default Article;
