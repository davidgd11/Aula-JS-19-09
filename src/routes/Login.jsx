import {useRef} from 'react';
import Conteudo from './Conteudo';
import Home from './Home';

function Login() {

    const usuario =useRef();
    const senha =useRef();
    const getUsuario = sessionStorage.getItem("dadosUser");
    const getSenha = sessionStorage.getItem("dadosSenha");

    const handleSubmit =()=>{
        if(usuario.current.value=== 'Admin' && senha.current.value=== '123456'){
            sessionStorage.setItem('dadosUser','admin');
            sessionStorage.setItem('dadosSenha','123456');
            alert('Logado com sucesso');
        }
        else{
            alert("Usuário ou Senha incorretos");
        }
    }


  return (
    <>
        {/* condição ternaria if ? e eslse :*/}

        {getUsuario && getSenha ? (
            <Conteudo />
        ): (

            <form onSubmit={handleSubmit}>
                    
            <h1>LOGIN</h1>
                    
            <p>
            <label htmlFor="nome"> Usuário: </label>
            <input type="text" placeholder='usuário' required ref={usuario} />
            </p>
                    
            <p>
            <label htmlFor="senha"> Senha: </label>
            <input type="password" placeholder='senha' required ref={senha} />
            </p>
                    
            <button type='submit' value="login"> Login </button>
                    
            </form>
            )
        }


       
    </>
  )
}

export default Login