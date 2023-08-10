import React from 'react';
import styles from './HeadlineTemplate.module.css';
import { HeadlineDatas } from '@/constants';

const HeadlineTemplate = () => {
  const bullet: string = `\u25AA`;

  return (
    <div className={styles.container}>
      {HeadlineDatas.map((headline) => (
        <ul key={headline.id} className={styles.card}>
          <li className={styles.headline}>
            <div className={styles.bulletWrapper}>
              <div className={styles.bullet}>{bullet}</div>
            </div>
            <div className={styles.title}>{headline.title}</div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default HeadlineTemplate;
