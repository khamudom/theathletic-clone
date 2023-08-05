import React from 'react';
import { MdModeComment } from 'react-icons/md';
import styles from './Attribution.module.css';

const Attribution = () => {
  return (
    <div className={styles.container}>
      Author
      <div className={styles.comment}>
        <MdModeComment />
        50
      </div>
    </div>
  );
};

export default Attribution;
