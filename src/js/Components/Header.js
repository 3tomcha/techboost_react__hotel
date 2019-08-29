import React from 'react';
import ReactDOM from 'react-dom';
import {Row} from 'react-bootstrap';
import Logo from '../../images/logo.png';

const path = "/" + Logo;

function Header(){
  return(
      <header>
          <img src={path}/>
      </header>
  );
}
export default Header;
