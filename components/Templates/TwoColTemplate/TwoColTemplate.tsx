import React from 'react';
import styles from './TwoColTemplate.module.css';
import { HalfCardSmall, StandardCard } from '@/components';
import { ArticleData, topArticles } from '@/constants';

interface TemplateTwoColumnProps {
  className?: string;
}

const TemplateTwoColumn: React.FC<TemplateTwoColumnProps> = ({ className }) => {
  const topArticle = topArticles[0];

  return (
    <section className={`${className}`}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <StandardCard
            title={topArticle.title}
            description={topArticle.description}
            imgSrc={topArticle.image}
            imgWidth={topArticle.width}
            imgHeight={topArticle.height}
            author={topArticle.author}
            commentCount={topArticle.commentCount}
            fontSize="1.28rem"
          />
        </div>
        <div className={styles.rightColumn}>
          {topArticles.slice(1).map((article: ArticleData, index: number) => {
            return (
              <div
                key={article.id}
                className={styles.card}
                style={{
                  borderBottom:
                    index !== topArticles.length - 2
                      ? '1px solid #F0F0EE'
                      : 'none',
                }}
              >
                <HalfCardSmall
                  title={article.title}
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
      </div>
    </section>
  );
};

export default TemplateTwoColumn;
