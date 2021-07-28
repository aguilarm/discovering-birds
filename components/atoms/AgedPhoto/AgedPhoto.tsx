import styles from './AgedPhoto.module.scss';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface Props {
  priority?: boolean;
  imageSrc: string;
  altText: string;
  className?: string;
  position?: string;
}

const AgedPhoto: React.FC<Props> = ({ className, imageSrc, altText, priority, position }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.overlay}>
        <Image
          priority={priority}
          src={`/assets/util/paper.png`}
          alt={'Aged paper overlay'}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center center'}
        />
      </div>
      <div className={styles.image}>
        <Image
          className={styles.image}
          priority={priority}
          src={imageSrc}
          alt={altText}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={position || 'center 55%'}
        />
      </div>

    </div>
  );
};

export default AgedPhoto;
