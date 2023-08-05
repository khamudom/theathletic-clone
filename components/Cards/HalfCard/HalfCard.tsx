import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './HalfCard.module.css';
import { Attribution } from '@/components';
import { CardProps } from '@/constants';

const HalfCard: React.FC<CardProps> = ({
  className,
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  const imgUrl = imgSrc || '';

  return (
    <div className={`${className}`}>
      <a className={styles.container}>
        <Image
          className={styles.image}
          src={imgUrl}
          alt="article image"
          width={imgWidth}
          height={imgHeight}
        />
        <div className={styles.content}>
          <div className={styles.date}>
            <span>Aug 2</span>
          </div>
          <div className={styles.headline}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
          </div>
          <Attribution />
        </div>
      </a>
    </div>
  );
};

export default HalfCard;
