import Home from '../Paginas/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Registro from '../Paginas/Registro';
import Login from '../Paginas/Login';
import Menu from '../Componentes/Menu';
import Detalle from '../Paginas/Detalle';
import Container from "react-bootstrap/Container"
import Busqueda from "../Componentes/Busqueda";
function Public() {
  return (
    
      <Router>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/alta" element={<Registro />}/>
            <Route path="/ingresar" element={<Login />}/>
            <Route path="/personajes/:id" element={<Detalle />}/>
            <Route path="/buscar" element={<Busqueda />}/>
            
          </Routes>
        </Container>
      </Router>

  );
}

export default Public;