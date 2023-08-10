import {
  Advert,
  RowStackTemplate,
  SingleTemplate,
  TwoColTemplate,
  TwoColSmLgTemplate,
  SectionTemplate,
  HeadlineTemplate,
  Button,
} from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Scoreboard</div>
      <div className={styles.headlineSection}>
        <TwoColTemplate className={styles.section} />
        <aside className={styles.aside}>
          <div className={styles.header}>
            <div className={styles.headline}>Headlines</div>
            <Button title="See all">See all</Button>
          </div>
          <HeadlineTemplate />
        </aside>
      </div>
      <Advert />
      <SectionTemplate className={styles.headlineSection}>
        <TwoColSmLgTemplate />
      </SectionTemplate>
      <SectionTemplate
        className={styles.section}
        title="A1: Today's Must-Read"
        btnContent="See all"
      >
        <SingleTemplate />
      </SectionTemplate>
      <RowStackTemplate className={styles.rowSection} />
    </main>
  );
}
