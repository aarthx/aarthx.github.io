import React from 'react';
import styles from './ProjectCard.module.css';
import { ReactComponent as Git } from '../assets/github.svg';

const ProjectCard = ({ photo, name, tags, deploy, github }) => {
  function verificaTag(tag) {
    switch (tag) {
      case 'HTML':
        return [styles.tagHTML, './icons/html.svg'];
      case 'CSS':
        return [styles.tagCSS, './icons/css.svg'];
      case 'JavaScript':
        return [styles.tagJS, './icons/js.svg'];
      case 'jQuery':
        return [styles.tagJQuery, './icons/jquery.svg'];
      case 'React':
        return [styles.tagReact, './icons/react.svg'];
      default:
        return none;
    }
  }

  return (
    <li className={styles.cardContainer}>
      <div className={styles.barraSuperior}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <a href={deploy}>
        <img src={photo} alt="" />
      </a>
      <h1>{name}</h1>
      <ul className={styles.tags}>
        <li className={verificaTag(tags[0])[0]}>
          <img src={verificaTag(tags[0])[1]} alt="logo" />
          <p>{tags[0]}</p>
        </li>
        <li className={verificaTag(tags[1])[0]}>
          <img src={verificaTag(tags[1])[1]} alt="logo" />
          <p>{tags[1]}</p>
        </li>
        {tags.length > 2 && <li className={styles.plus}>+{tags.length - 2}</li>}
      </ul>
      <div className={styles.links}>
        <a href={deploy}>Acessar</a>
        <a href={github} className={styles.github}>
          <Git />
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
