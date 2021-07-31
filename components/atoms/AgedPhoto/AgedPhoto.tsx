import styles from './AgedPhoto.module.scss';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface Props {
  priority?: boolean;
  imageSrc?: string | StaticImageData;
  altText: string;
  className?: string;
  position?: string;
}

const AgedPhoto: React.FC<Props> = ({
  className,
  imageSrc,
  altText,
  priority,
  position,
}) => {
  // Go a little nuts to get Typescript happy about statically imported images
  const imageProps = {
    className: styles.image,
    priority: !!priority,
    alt: altText,
    layout: 'fill',
    objectFit: 'cover',
    placeholder: typeof imageSrc === 'string' ? 'empty' : 'blur',
    objectPosition: position || 'center 55%',
  };
  const renderImage = (
    // @ts-ignore
    <Image src={imageSrc} {...imageProps} />
  );
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.overlay}>
        <Image
          priority={!!priority}
          src={`/assets/util/paper.png`}
          alt={'Aged paper overlay'}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center center'}
        />
      </div>
      <div className={styles.image}>{renderImage}</div>
    </div>
  );
};

export default AgedPhoto;
