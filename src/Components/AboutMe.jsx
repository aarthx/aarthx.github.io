import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={styles.sobreMim}>
      <div className={styles.sobreContainer}>
        <div className={styles.barraSuperior}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h2>Sobre mim</h2>
        </div>
        <div className={styles.contentBox}>
          <h3>Localização:</h3>
          <p>“Brasília, Brazil”</p>
          <h3>Contatos:</h3>
          <p>
            [“<a href="https://www.linkedin.com/in/arthur-augusto/">LinkedIn</a>
            ”, “<a href="https://github.com/aarthx">Github</a>”, “
            <a href="tel:61995841739">(61) 99584-1739</a>”, “
            <a href="mailto:arthuraugusto.exe@gmail.com">
              arthuraugusto.exe@gmail.com
            </a>
            ”]
          </p>
          <h3>Currículo:</h3>
          <p>
            [“
            <a href="https://drive.google.com/file/d/1x10vMdKbLddl6cpkj5D1S1wwD3dUMglZ/view?usp=sharing">
              Arthur_A_CV.pdf
            </a>
            ”]
          </p>
          <h3>Interesses:</h3>
          <p>[“Desenvolvimento Web”, "Jogos”, “Física”, “Astronomia”]</p>
          <h3>Educação:</h3>
          <p>
            [“Bacharelado em Engenharia Civil (IFG) - Cursando”, “Tecnólogo em
            Análise e desenvolvimento de sistemas (UniAmérica) - Cursando”]
          </p>
          <h3>Conhecimentos:</h3>
          <p>[“React.js”, “HTML”, “CSS”, “JavaScript”, “GitHub”, “git”]</p>
        </div>
      </div>
      <div className={styles.colorTransition}></div>
    </section>
  );
};

export default AboutMe;
