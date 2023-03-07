import React from 'react';
import { ReactComponent as Shadow } from '../assets/AAshadow.svg';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <p className={styles.ola}>Olá, meu nome é</p>
        <p className={styles.nome}>Arthur Augusto</p>
        <p className={styles.cargo}>Desenvolvedor Front-End</p>
      </div>
      <div className={styles.foto}>
        <Shadow />
      </div>
      <div className={styles.colorTransition}></div>
    </section>
  );
};

export default Intro;
