import styles from './Hero.module.scss';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  {
    name: 'black-phoebe.jpg',
    alt: 'Black Phoebe',
  },
  {
    name: 'blue-gray-gnatcatcher.jpg',
    alt: 'Blue-Gray Gnatcatcher',
  },
  {
    name: 'eastern-phoebe.jpg',
    alt: 'Eastern Phoebe',
  },
  {
    name: 'eastern-phoebe2.jpg',
    alt: 'Eastern Phoebe',
  },
  {
    name: 'green-jay.jpg',
    alt: 'Green Jay',
  },
  { name: 'harris-hawk.jpg', alt: 'Harris Hawk' },
  { name: 'kiskadee.jpg', alt: 'Kiskadee' },
  { name: 'mockingbird.jpg', alt: 'Mockingbird' },
  { name: 'mockingbirds.jpg', alt: 'Two Mockingbirds' },
  { name: 'power-lines.jpg', alt: 'Powerlines in fog' },
  { name: 'red-bellied-woodpecker.jpg', alt: 'Red Bellied Woodpecker' },
  { name: 'van.jpg', alt: 'Van in campsite' },
];

interface Props {
  imageIndex?: number;
}

const Hero: React.FC<Props> = ({ imageIndex = 0 }) => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.image}
        priority={true}
        src={`/assets/hero-images/${IMAGES[imageIndex].name}`}
        alt={IMAGES[imageIndex].alt}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center 25%'}
      />
    </div>
  );
};

export default Hero;
