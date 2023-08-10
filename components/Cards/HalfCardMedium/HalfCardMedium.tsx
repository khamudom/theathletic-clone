import React from 'react';
import Image from 'next/image';
import styles from './HalfCardMedium.module.css';
import { CardProps } from '@/types';
import { Attribution } from '@/components';

interface HalfCardMediumProps extends CardProps {
  className?: string;
}

const HalfCardMedium: React.FC<HalfCardMediumProps> = ({
  className,
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
      <Image
        className={styles.image}
        src={imgUrl}
        alt={`Image for ${title}`}
        width={imgWidth}
        height={imgHeight}
      />
      <div className={styles.content}>
        <p>{title}</p>
        <div className={styles.attribution}>
          <Attribution author={authorName} commentCount={commentNum} />
        </div>
      </div>
    </div>
  );
};

export default HalfCardMedium;
