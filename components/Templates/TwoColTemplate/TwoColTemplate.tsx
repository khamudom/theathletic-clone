import React from 'react';
import Image from 'next/image';
import styles from './TwoColTemplate.module.css';
import { Attribution, StandardCard } from '@/components';
import { ArticleData, topArticles, CardProps } from '@/constants';

interface TemplateTwoColumnProps {
  className?: string;
}

const HalfCardSmall: React.FC<CardProps> = ({
  title,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  const imgUrl = imgSrc || '';
  return (
    <div className={styles.halfArticleCard}>
      <div className={styles.halfArticleContent}>
        <h4>{title}</h4>
        <div className={styles.halfArticleAttribution}>
          <Attribution />
        </div>
      </div>
      <Image
        className={styles.halfArticleImage}
        src={imgUrl}
        alt="article image"
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};

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
          />
        </div>
        <div className={styles.halfCards}>
          {topArticles.slice(1).map((article: ArticleData) => {
            return (
              <HalfCardSmall
                key={article.id}
                title={article.title}
                imgSrc={article.image}
                imgWidth={article.width}
                imgHeight={article.height}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TemplateTwoColumn;
