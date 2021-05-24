import styles from './Header.module.scss';
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.borderContainer}>
        <Link href={'/'}>
          <div className={styles.title}>
            <div className={styles.discovering}>discovering</div>
            <div className={styles.birds}>birds</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
