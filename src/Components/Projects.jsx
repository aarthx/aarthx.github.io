import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [tags, setTags] = React.useState(null);
  const [projetos, setProjetos] = React.useState(null);
  const [tagAtual, setTagAtual] = React.useState('Todos');

  React.useEffect(() => {
    async function pegaProjetos() {
      const response = await fetch('projetos.json');
      const json = await response.json();
      setProjetos(json);
    }
    pegaProjetos();
  }, []);

  React.useEffect(() => {
    if (projetos) {
      function pegaTags() {
        const tagsUtilizadas = [];
        projetos.forEach((projeto) => {
          projeto.tags.forEach((tag) => {
            if (!tagsUtilizadas.includes(tag)) {
              tagsUtilizadas.push(tag);
            }
          });
        });
        setTags(tagsUtilizadas);
        console.log(projetos);
      }
      pegaTags();
    }
  }, [projetos]);

  const lista = useRef(null);

  function handleClick(e) {
    lista.current.childNodes.forEach((li) => {
      li.className = '';
    });
    e.currentTarget.className = styles.active;
    setTagAtual(e.currentTarget.childNodes[0].innerText);
  }

  return (
    <section className={styles.projetos}>
      <h1 className={styles.title}>Projetos</h1>
      <p className={styles.subTitle}>
        Se tiver alguma dúvida ou sugestão entre em contato.
      </p>
      <ul className={styles.filtro} ref={lista}>
        <li key={'todos'} className={styles.active} onClick={handleClick}>
          <span>Todos</span> ({projetos && projetos.length})
        </li>
        {projetos &&
          tags &&
          tags.map((tag) => (
            <li key={tag} onClick={handleClick}>
              <span>{tag}</span> (
              {projetos.reduce((acc, current, index, array) => {
                if (current.tags.includes(tag)) return acc + 1;
                else return acc;
              }, 0)}
              )
            </li>
          ))}
      </ul>
      <ul className={styles.projectList}>
        {projetos &&
          projetos
            .filter((projeto) => {
              if (tagAtual === 'Todos') return true;
              return projeto.tags.includes(tagAtual);
            })

            .map((projeto) => (
              <ProjectCard
                name={projeto.name}
                photo={projeto.image}
                tags={[...projeto.tags]}
                deploy={projeto.deploy}
                github={projeto.github}
                key={projeto.project}
              />
            ))}
      </ul>
    </section>
  );
};

export default Projects;
