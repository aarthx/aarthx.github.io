import React from 'react';
import styles from './Contacts.module.css';
import { ReactComponent as Github } from '../assets/githubLink.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedinLink.svg';
import { ReactComponent as Instagram } from '../assets/instagramLink.svg';

const Contacts = () => {
  return (
    <footer className={styles.contatos}>
      <h1>Contato</h1>
      <a href="mailto:arthuraugusto.exe@gmail.com">
        arthuraugusto.exe@gmail.com
      </a>
      <a href="tel:61995841739">(61) 99584-1739</a>
      <div className={styles.logoLinks}>
        <a className={styles.linkSvg} href="https://github.com/aarthx">
          <Github />
        </a>
        <a
          className={styles.linkSvg}
          href="https://www.linkedin.com/in/arthur-augusto/"
        >
          <LinkedIn />
        </a>
        <a
          className={styles.linkSvg}
          href="https://www.instagram.com/arthx.exe/"
        >
          <Instagram />
        </a>
      </div>
      <p>Desenvolvido por Arthur Augusto</p>
    </footer>
  );
};

export default Contacts;
