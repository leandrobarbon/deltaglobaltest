import React, { useState } from "react";
import { Navbar } from "./styles";

import Logo from "../../assets/logo.jpg";
import { FaBars, FaSistrix } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Navbar>
      <div className="nav-container">
        <img src={Logo} alt="logo Delta Global" className="nav-logo"/>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">Primeiro Menu</li>
          <li className="nav-item">Segundo Menu</li>
          <li className="nav-item">Terceiro Menu</li>
          <li className="nav-item">Quarto Menu</li>
          
        </ul>
        <div className="nav-search">
          <FaSistrix  size={24}/>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <FaBars />
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
