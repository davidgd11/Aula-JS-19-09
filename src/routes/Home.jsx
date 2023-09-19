import { useState } from 'react';
 {/*importando imagems */}
import ImageNav from '../assets/img1.png';
import Image1 from '../assets/produto-hero.jpg';
 /*declarando o style e chamando o css module */
import styles from '../css/Home.module.css';

function Home() {
/*Hook- useState */
const [contador, setContador]= useState(0);
const [lista, setLista]=useState([]);

/*criando as funções para chamar os hooks usando arrow Function*/

const incrementar =()=> setContador(contador +1);
const decrementar =()=> setContador(contador -1);
/*função que gera a lista 
... (spred) pega tudo antes de algum elemento como exemplo a lista
 objeto Math com o metodo random e fixar 2 digitos depois da virgula*/
const addLista=()=> setLista([...lista,Math.random(10).toFixed(2)]);


  return (
    <>
    {/* criadno a classe para deixar a imagem de fundo  */}
    <div className={styles.home}>
      <img src={ImageNav} title="imagem" className={styles.imgNav}/>
    </div>
     {/* textos e imagem da pagina e usando o css module*/}
     <p className={styles.texto1}>
      <div className={styles.exem1}><img src={Image1} title="imagem1" className={styles.Image1}/></div> 
       <div className={styles.exem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui arcu, faucibus nec scelerisque vitae, rutrum ut diam. Quisque at magna scelerisque, efficitur diam a, volutpat nunc. Etiam in mauris.</div>
      </p>
    <fieldset className={styles.contador}>
      <legend>Contador</legend>
        <p>Valor:{contador}</p>
        {/* botão aumentar com a função incrementar e decrementar*/}
        <button onClick={incrementar} className={styles.btn}>Aumentar</button>
        <button onClick={decrementar} className={styles.btn}>Diminuir</button>
    </fieldset>

<fieldset className={styles.lista}>
  <legend>Lista </legend>
    <ul>
    {/* metodo map que vai percorer a lista criar quando adicionar um item na lista*/}
      {lista.map((num, index)=><l1 key={index}>{num}</l1>)}
    </ul>
      <button onClick={addLista} className={styles.btn}>Lista</button>
</fieldset>
   

    </>
  );
}

export default Home;
