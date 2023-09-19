import React from 'react';
import ReactDOM from 'react-dom/client';
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* importando os elementos */
import App from './App.jsx';
import Home from './routes/Home.jsx'
import Error from './components/Error.jsx';
import Produtos from './routes/Produtos.jsx';
import Conteudo from './routes/Conteudo.jsx';
import Login from './routes/Login.jsx';





/* criando a função createBrowser */
const router = createBrowserRouter([
  {
    /* chamando o elemento principal(pai) */
    path: '/',
    element: <App />,
    /*  chamando o elemento de erro*/
    errorElement: <Error />,

    /* chamando elementos filhos */
    children: [
  
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/home', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/conteudo', element: <Conteudo /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
