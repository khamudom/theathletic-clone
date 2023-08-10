import React from 'react';
import styles from './Advert.module.css';

const Advert = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Advertisement</span>
        <div className={styles.ad}></div>
      </div>
    </div>
  );
};

export default Advert;
