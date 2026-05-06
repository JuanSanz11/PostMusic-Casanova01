import format from 'date-fns/format';
import {ptBR} from 'date-fns/locale/pt-BR'; // 👈 Asegúrate de tener esta línea

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMM')
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoArea}>
        <img src="/logo.svg" alt="Postmusic" />
        <div className={styles.divider} />
        <strong>POSTMUSIC<span> PRO</span></strong>
      </div>

      <div className={styles.statusArea}>
        <p>CASANOVA SESSION // 24-BIT / 96KHZ</p>
      </div>
      
      <span className={styles.date}>{currentDate}</span>
    </header>
  );
}