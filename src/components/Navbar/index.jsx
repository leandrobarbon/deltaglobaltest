
import { Container, Image, Menu, LogoMenu, Icon } from './styles';

import Logo from '../../assets/logo.jpg'
import { FaSearch } from "react-icons/fa";

function Navbar() {
   return(
      <Container>
         <LogoMenu>
         <Image src={Logo}/>
         <Menu>
            <a href="/" >Primeiro Menu</a>
            <a href="/" >Segundo Menu</a>
            <a href="/" >Terceiro Menu</a>
            <a href="/" >Quarto Menu</a>
         </Menu>
         </LogoMenu>
         <Icon><FaSearch size={24.8}/></Icon>
      </Container>
   );
}

export default Navbar;