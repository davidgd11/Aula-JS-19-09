import {} from 'react';
 {/* import do Outlet*/}
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
       {/* chama os elementos filhos para ser mostrados  na tela */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
