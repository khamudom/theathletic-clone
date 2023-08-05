import {
  Advert,
  HalfCard,
  TwoColTemplate,
  TwoColSmLgTemplate,
  RowStackTemplate,
} from '@/components';
import styles from './page.module.css';
import { SingleData } from '@/constants';

export default function Home() {
  const article = SingleData[0];

  return (
    <main className={styles.main}>
      <div>Scoreboard</div>
      <div className={styles.headlineSection}>
        <TwoColTemplate className={styles.section} />
        <aside className={styles.aside}>Headlines</aside>
      </div>
      <Advert />
      <section className={styles.headlineSection}>
        <TwoColSmLgTemplate />
      </section>
      <section className={styles.section}>
        <div>
          <div className={styles.header}>
            Title <button>See all</button>
          </div>
          <HalfCard
            key={article.id}
            title={article.title}
            imgSrc={article.image}
            imgWidth={article.width}
            imgHeight={article.height}
          />
        </div>
      </section>
      <RowStackTemplate className={styles.rowSection} />
    </main>
  );
}
