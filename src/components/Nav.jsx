import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.module.css';

function Nav() {
  {
    /* componente do nav e importando o css module usando link */
  }
  return (
    <section className={styles.nav}>
      <Link to="home" className={styles.tlink}>
        Home
      </Link>
      <Link to="produtos" className={styles.tlink}>
        Produtos
      </Link>
      <Link to="conteudo" className={styles.tlink}>
        Conteúdo
      </Link>
      <Link to="login" className={styles.tlink}>
        Login
      </Link>

    </section>
  );
}

export default Nav;
