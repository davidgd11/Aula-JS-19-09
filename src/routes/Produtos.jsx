import { } from 'react'

import Image1 from '../assets/cap1.jpg';
import styles from '../css/Produtos.module.css';


function Produtos() {
 {/* componente produtos usando css module com imagem e texto */}

  return (
    <>
    <section className={styles.home}>
      <p className={styles.texto1}>
      <div className={styles.exem1}><img src={Image1} title="imagem1" className={styles.Image1}/></div> 
       <div className={styles.exem1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. </div>
      </p>

      <p className={styles.texto2}>
       <div className={styles.exem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc.  </div>
       <div className={styles.exem2}><img src={Image1} title="imagem1" className={styles.Image2}/></div> 
      </p>

    </section>

     
    </>
  )
}

export default Produtos
