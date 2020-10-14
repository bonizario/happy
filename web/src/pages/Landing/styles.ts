import styled from 'styled-components';
import { Link } from 'react-router-dom';
import landingBackground from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-gradient);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 110rem;
  max-height: 66rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: url(${landingBackground}) no-repeat 80% 10%;

  > img {
    margin-bottom: 10rem;
  }
`;

export const Main = styled.main`
  max-width: 35rem;

  > h1 {
    font-size: 7.6rem;
    line-height: 7rem;
    font-weight: 900;
  }

  > p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
  transition: background-color 250ms;
  background-color: var(--color-yellow);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-blue-hover);
  }
`;
