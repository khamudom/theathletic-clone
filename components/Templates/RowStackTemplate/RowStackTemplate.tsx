import React from 'react';
import styles from './RowStackTemplate.module.css';
import { StandardCard } from '@/components';
import { rowArticles } from '@/constants';

interface RowStackTemplateProps {
  className?: string;
  index?: number;
}

const RowStackTemplate: React.FC<RowStackTemplateProps> = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className={styles.container}>
        {rowArticles.map((article, index) => (
          <div
            key={article.id}
            className={styles.card}
            style={{
              borderRight:
                index !== rowArticles.length - 1 ? '1px solid #F0F0EE' : 'none',
            }}
          >
            <StandardCard
              title={article.title}
              imgSrc={article.image}
              imgWidth={article.width}
              imgHeight={article.height}
              author={article.author}
              commentCount={article.commentCount}
              fontSize="0.875rem"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RowStackTemplate;
