import styles from './Header.module.scss';
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <div className={styles.title}>
          <div className={styles.searching}>Searching</div>
          <div className={styles.for}>for</div>
          <div className={styles.birds}>birds</div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
