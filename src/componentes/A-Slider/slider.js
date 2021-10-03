import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from '../Home/home';
import SobreMi from '../SobreMi/sobremi';
import Experiencia from '../Experiencia/experiencia';
import Proyectos from '../Proyectos/proyectos';
import Contacto from '../Contacto/contacto';
import NavBar from '../A-NavBar/navbar';

let SliderHtml = ()=>{
    return (
        
        <div>
        <div className="navbar-container"><NavBar/></div>
          <div className="container">
          <div className="item"><Home/></div>
          <div className="item"><SobreMi/></div>
          <div className="item"><Experiencia/></div>
          <div className="item"><Proyectos/></div>
          <div className="item"><Contacto/></div>
          </div>
       </div>
    )
}

export default SliderHtml;