import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <strong>POSTMUSIC<span>PRO</span></strong>
          <p>Professional Sound & Music Production</p>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Casanova Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
