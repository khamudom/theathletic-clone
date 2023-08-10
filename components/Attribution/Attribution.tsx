import React from 'react';
import { MdModeComment } from 'react-icons/md';
import styles from './Attribution.module.css';

type AttributionProps = {
  author: string;
  commentCount: number;
};

const Attribution: React.FC<AttributionProps> = ({ author, commentCount }) => {
  return (
    <div className={styles.container}>
      <p className={styles.author}>{author}</p>
      <p className={styles.comment}>
        <span className={styles.icon}>
          <MdModeComment />
        </span>
        {commentCount}
      </p>
    </div>
  );
};

export default Attribution;
