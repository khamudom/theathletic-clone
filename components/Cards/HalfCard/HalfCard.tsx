'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HalfCard.module.css';
import { Attribution } from '@/components';
import { CardProps } from '@/types';

interface HalfCardProps extends CardProps {
  className?: string;
}

const HalfCard: React.FC<HalfCardProps> = ({
  className,
  date,
  title,
  description,
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
    <>
      <a className={styles.container}>
        <div className={styles.content}>
          <span className={styles.date}>{date}</span>
          <div className={styles.headline}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
          </div>
          <Attribution author={authorName} commentCount={commentNum} />
        </div>
        <Image
          className={styles.image}
          src={imgUrl}
          alt={`Image for ${title}`}
          width={imgWidth}
          height={imgHeight}
        />
      </a>
    </>
  );
};

export default HalfCard;
