import React from 'react';

import { Container } from './styles';

import NavBar from '../../components/Navbar';
import Slider from '../../components/Slider';
import Cards from '../../components/Cards';

function Home() {
   return (
      <Container>
      <NavBar />
      <Slider />
      <Cards />
      </Container>
   );
}

export default Home;