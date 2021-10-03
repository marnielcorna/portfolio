import { Link } from "react-router-dom";

import Home from '../Home/home';
import SobreMi from '../SobreMi/sobremi';
import Experiencia from '../Experiencia/experiencia';
import Proyectos from '../Proyectos/proyectos';
import Contacto from '../Contacto/contacto';

const NavBar = () => {
  return (
    
      <div className="main-nav">
        <div>
          <Link to={<Home/>}>Home</Link>
        </div>
        <div>
          <Link className="link">Sobre mi</Link>
        </div>
        <div>
          <Link className="link">Experiencia</Link>
        </div>
        <div>
          <Link className="link">Proyectos</Link>
        </div>
        <div>
          <Link className="link">Contacto</Link>
        </div>
      </div>
  );
};

export default NavBar;
