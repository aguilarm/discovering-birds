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
  loadImmediately?: boolean;
}

const AgedPhoto: React.FC<Props> = ({
  className,
  imageSrc,
  altText,
  priority,
  loadImmediately,
  position,
}) => {
  // Go a little nuts to get Typescript happy about statically imported images
  const imageProps = {
    className: styles.image,
    priority: !!priority,
    loading: undefined,
    alt: altText,
    layout: 'fill',
    objectFit: 'cover',
    placeholder: typeof imageSrc === 'string' ? 'empty' : 'blur',
    objectPosition: position || 'center 55%',
  };

  if (loadImmediately) {
    if (priority) {
      console.warn(
        'Image ' +
          imageSrc +
          ' should not have priority and immediate load. Priority is sufficient',
      );
    } else {
      imageProps.loading = 'eager';
    }
  }

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
