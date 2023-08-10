'use client';

import React from 'react';
import styles from './SectionTemplate.module.css';
import { Button } from '@/components';

type SectionTemplateProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  btnContent?: string;
};

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  children,
  className,
  title,
  btnContent,
}) => {
  return (
    <section className={`${className} ${styles.container}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <Button title={btnContent}>{btnContent}</Button>
      </div>
      {children}
    </section>
  );
};

export default SectionTemplate;
