import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  & .map-popup .leaflet-popup-content-wrapper {
    background-color: var(--color-white);
    border-radius: 2rem;
    box-shadow: none;
    height: 6.4rem;
  }

  & .map-popup .leaflet-popup-content {
    color: var(--color-text-title);
    font: 700 2rem/2.7rem Nunito, sans-serif;
    margin: 1.2rem 1.2rem 1.2rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .map-popup .leaflet-popup-tip-container {
    display: none;
    visibility: hidden;
  }
`;

export const SideBar = styled.aside`
  width: 44rem;
  padding: 8rem;
  background: var(--color-gradient);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  > h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  > p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }
`;

export const Footer = styled.footer`
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  z-index: 2;
  right: 4rem;
  bottom: 4rem;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 2rem;
  transition: background-color 250ms;
  background-color: var(--color-blue);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-blue-hover);
  }
`;

export const OrphanageDetail = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 1.2rem;
  background-color: var(--color-blue);
  transition: background-color 250ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-text-title);
  }
`;
