import React from 'react';
import Image from 'next/image';
import styles from './HalfCardSmall.module.css';
import { CardProps } from '@/types';
import { Attribution } from '@/components';

const HalfCardSmall: React.FC<CardProps> = ({
  title,
  imgSrc,
  imgWidth,
  imgHeight,
  author,
  commentCount,
}) => {
  const imgUrl = imgSrc || '';
  const authorName = author || '';
  const commentNum = commentCount || 0;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{title}</p>
        <div className={styles.attribution}>
          <Attribution author={authorName} commentCount={commentNum} />
        </div>
      </div>
      <Image
        className={styles.image}
        src={imgUrl}
        alt={`Image for ${title}`}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};

export default HalfCardSmall;
