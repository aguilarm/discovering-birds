import styles from './Footer.module.scss';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href={'/'}>
        <div className={styles.title}>
          <div className={styles.searching}>Searching</div>
          <div className={styles.for}>for</div>
          <div className={styles.birds}>birds</div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
