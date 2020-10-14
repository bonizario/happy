import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';
import { Container, SideBar, Header, Footer, CreateOrphanage } from './styles';

const OrphanagesMap: React.FC = () => (
  <Container className="noselect">
    <SideBar>
      <Header>
        <img src={mapMarkerImg} alt="Orfanato" srcSet={mapMarkerImg} />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </Header>

      <Footer>
        <strong>Uberaba</strong>
        <span>Minas Gerais</span>
      </Footer>
    </SideBar>

    <Map
      center={[-19.7487441, -47.9401207]}
      zoom={15}
      style={{ width: '100%', height: '100%', zIndex: 1 }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>

    <CreateOrphanage to="">
      <FiPlus size={32} color="#ffffff" />
    </CreateOrphanage>
  </Container>
);

export default OrphanagesMap;
