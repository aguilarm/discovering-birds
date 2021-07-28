import styles from './Hero.module.scss';
import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const Hero: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        priority={true}
        src={src}
        alt={alt}
        title={alt}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center 65%'}
      />
    </div>
  );
};

export default Hero;
