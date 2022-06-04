import styles from './AgedPhoto.module.scss';
import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
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
  const imageProps: ImageProps = {
    className: styles.image,
    priority: !!priority,
    loading: undefined,
    alt: altText,
    layout: 'fill',
    objectFit: 'cover',
    // Asserting string is untrue but this prevents an any lint error. Unclear root cause.
    src: imageSrc as string,
    placeholder: typeof imageSrc === 'string' ? 'empty' : 'blur',
    objectPosition: position || 'center 55%',
  };

  if (loadImmediately) {
    if (priority) {
      console.warn(
        `Image ${altText} should not have priority and immediate load. Priority is sufficient`,
      );
    } else {
      imageProps.loading = 'eager';
    }
  }

  const renderImage = <Image alt={altText} {...imageProps} />;
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
