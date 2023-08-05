import React from 'react';
import { HalfCard, StandardCard } from '@/components';
import styles from './TwoColSmLgTemplate.module.css';
import { CardProps } from '@/constants';
import { ThreeTileDataOne, ArticleData } from '@/constants';

const TwoColSmLgTemplate: React.FC<CardProps> = ({ className }) => {
  const firstTwoData = ThreeTileDataOne.slice(0, 2);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        {firstTwoData.map((article: ArticleData) => {
          return (
            <HalfCard
              className={styles.halfCard}
              key={article.id}
              title={article.title}
              imgSrc={article.image}
              imgWidth={article.width}
              imgHeight={article.height}
            />
          );
        })}
      </div>
      <div className={styles.rightColumn}>
        {ThreeTileDataOne.slice(2).map((article: ArticleData) => {
          return (
            <StandardCard
              key={article.id}
              title={article.title}
              description={article.description}
              imgSrc={article.image}
              imgWidth={article.width}
              imgHeight={article.height}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TwoColSmLgTemplate;
