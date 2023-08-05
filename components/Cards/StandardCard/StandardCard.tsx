import React from 'react';
import Image from 'next/image';
import styles from './StandardCard.module.css';
import { Attribution } from '@/components';
import { CardProps } from '@/constants';

const StandardCard: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  const imgUrl = imgSrc || '';

  return (
    <div className={styles.container}>
      <Image
        src={imgUrl}
        alt="article image"
        width={imgWidth}
        height={imgHeight}
      />
      <h5>{title}</h5>
      <p className={styles.description}>{description}</p>
      <Attribution />
    </div>
  );
};

export default StandardCard;
