import {} from 'react';
import styles from '../css/Table.module.css';
import { ListaProdutos } from '../components/ListaProdutos';


function Conteudo() {
  return (
    <>
{/* criando a classe  produtos e importando o css module*/}
<section className={styles.tableProduto}>
        <h1>Produtos</h1>
       {/* criando a tabela produtos */}
        <table className={styles.estiloTabela}>
          {/* cabecalho da tabela*/}
          <thead>
            <tr>
              <th className={styles.estiloCelula}>ID</th>
              <th className={styles.estiloCelula}>NOME</th>
              <th className={styles.estiloCelula}>DESCRIÇÃO</th>
              <th className={styles.estiloCelula}>PREÇO</th>         
            </tr>
          </thead>
     {/* corpo da tabela*/}
          <tbody>
            {/* buscando os dados da do componente lista Produtos e usando o metodo map(usando o key) para fazer tudo e mostrar na tabela*/}
            {ListaProdutos.map((produto, indice) => (
              <tr key={indice}>
                <td className={styles.estiloCelula}>{produto.id}</td>
                <td className={styles.estiloCelula}>{produto.nome}</td>
                <td className={styles.estiloCelula}>{produto.desc}</td>
                <td className={styles.estiloCelula}>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
{/* footer da tabela*/}
          <tfoot>
            <tr>
              <td>PRODUTOS</td>
            </tr>
          </tfoot>
        </table>
      </section>
  
    </>
  );
}
export default Conteudo;
