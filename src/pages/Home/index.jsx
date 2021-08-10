import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import Cards from '../../components/Cards';

function Home() {
   return (
      <Container>
      <Navbar />
      <Slider />
      <Cards />
      </Container>
   );
}

export default Home;