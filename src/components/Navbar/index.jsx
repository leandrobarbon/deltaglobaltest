import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Navbar } from "./styles";

import Logo from "../../assets/logo.jpg";
import { FaBars, FaSistrix } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const history = useHistory();
  
  return (
    <Navbar>
      <div className="nav-container">
        <img src={Logo} alt="logo Delta Global" className="nav-logo"/>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <a href="/" alt="Primeiro Menu" className="nav-item">Primeiro Menu</a>
          <a href="/"  alt="Segundo Menu" className="nav-item">Segundo Menu</a>
          <a href="/"  alt="Terceiro Menu" className="nav-item">Terceiro Menu</a>
          <a href="/"  alt="Quarto Menu" className="nav-item">Quarto Menu</a>
          <a href="" alt="Search" className="nav-item nav-search"><FaSistrix  size={24}/></a>    
        </ul>
       
        <div className="nav-icon" onClick={handleClick}>
          <FaBars />
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
