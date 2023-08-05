import React from 'react';
import styles from './RowStackTemplate.module.css';
import { StandardCard } from '@/components';
import { rowArticles } from '@/constants';

interface RowStackTemplateProps {
  className?: string;
}

const RowStackTemplate: React.FC<RowStackTemplateProps> = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className={styles.container}>
        {rowArticles.map((article) => (
          <div key={article.id} className={styles.card}>
            <StandardCard
              title={article.title}
              imgSrc={article.image}
              imgWidth={article.width}
              imgHeight={article.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RowStackTemplate;
