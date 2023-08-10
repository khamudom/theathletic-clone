import React from 'react';
import { HalfCardMedium, StandardCard } from '@/components';
import styles from './TwoColSmLgTemplate.module.css';
import { ThreeTileData, ArticleData } from '@/constants';

type TwoColSmLgTemplateProps = {
  className?: string;
};

const TwoColSmLgTemplate: React.FC<TwoColSmLgTemplateProps> = ({
  className,
}) => {
  const firstTwoData = ThreeTileData.slice(0, 2);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        {firstTwoData.map((article: ArticleData, index: number) => {
          return (
            <div
              key={article.id}
              className={styles.halfCard}
              style={{
                borderBottom:
                  index !== firstTwoData.length - 1
                    ? '1px solid #F0F0EE'
                    : 'none',
                paddingBottom: index !== firstTwoData.length - 1 ? '24px' : '0',
                paddingTop: index === firstTwoData.length - 1 ? '24px' : '0',
              }}
            >
              <HalfCardMedium
                title={article.title}
                description={article.description}
                imgSrc={article.image}
                imgWidth={article.width}
                imgHeight={article.height}
                author={article.author}
                commentCount={article.commentCount}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.rightColumn}>
        {ThreeTileData.slice(2).map((article: ArticleData) => {
          return (
            <div key={article.id} className={styles.standardCard}>
              <StandardCard
                title={article.title}
                imgSrc={article.image}
                imgWidth={article.width}
                imgHeight={article.height}
                author={article.author}
                commentCount={article.commentCount}
                fontSize="20px"
                alignCenter
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TwoColSmLgTemplate;
