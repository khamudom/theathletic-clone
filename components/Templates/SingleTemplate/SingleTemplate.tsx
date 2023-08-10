import React from 'react';
import { HalfCard } from '@/components';
import styles from './SingleTemplate.module.css';
import { SingleData } from '@/constants';

interface SingleTemplateProps {
  className?: string;
}

const SingleTemplate: React.FC<SingleTemplateProps> = ({ className }) => {
  const article = SingleData[0];

  return (
    <>
      <HalfCard
        id={article.id}
        title={article.title}
        description={article.description}
        imgSrc={article.image}
        imgWidth={article.width}
        imgHeight={article.height}
        date={article.date}
        author={article.author}
        commentCount={article.commentCount}
      />
    </>
  );
};

export default SingleTemplate;
