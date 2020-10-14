import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

import { Container, Wrapper, Main, Location, EnterApp } from './styles';

const Landing: React.FC = () => (
  <Container className="noselect">
    <Wrapper>
      <img src={logoImg} alt="Happy" srcSet={logoImg} />

      <Main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </Main>

      <Location>
        <strong>Uberaba</strong>
        <span>Minas Gerais</span>
      </Location>

      <EnterApp to="/app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </EnterApp>
    </Wrapper>
  </Container>
);

export default Landing;
