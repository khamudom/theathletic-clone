import React from 'react';
import Image from 'next/image';
import styles from './StandardCard.module.css';
import { Attribution } from '@/components';
import { CardProps } from '@/types';

interface StandardCardProps extends CardProps {
  fontSize: string;
  alignCenter?: boolean;
}

const StandardCard: React.FC<StandardCardProps> = ({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  author,
  commentCount,
  fontSize,
  alignCenter,
}) => {
  const imgUrl = imgSrc || '';
  const authorName = author || '';
  const commentNum = commentCount || 0;

  return (
    <div className={styles.container}>
      <Image
        src={imgUrl}
        alt="article image"
        width={imgWidth}
        height={imgHeight}
      />
      <div
        className={styles.content}
        style={{ alignItems: alignCenter ? 'center' : 'unset' }}
      >
        <h5 className={styles.title} style={{ fontSize: `${fontSize}` }}>
          {title}
        </h5>

        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.attribution}>
          <Attribution author={authorName} commentCount={commentNum} />
        </div>
      </div>
    </div>
  );
};

export default StandardCard;
