import format from 'date-fns/format';
import {ptBR} from 'date-fns/locale/pt-BR'; // 👈 Asegúrate de tener esta línea

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMM')
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Postmusic" />

      <p>POSTMUSIC - CASANOVA</p>
      
      <span>{currentDate}</span>
    </header>
  );
}