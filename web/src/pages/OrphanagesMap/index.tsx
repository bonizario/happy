import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';
import {
  Container,
  SideBar,
  Header,
  Footer,
  CreateOrphanage,
  OrphanageDetail,
} from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [64, 72],
  iconAnchor: [32, 72],
  popupAnchor: [180, 4],
});

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

      <Marker icon={mapIcon} position={[-19.7487441, -47.9401207]}>
        <Popup
          className="map-popup"
          closeButton={false}
          minWidth={240}
          maxWidth={240}
        >
          Lar das meninas
          <OrphanageDetail to="/">
            <FiArrowRight size={20} color="var(--color-white)" />
          </OrphanageDetail>
        </Popup>
      </Marker>
    </Map>

    <CreateOrphanage to="">
      <FiPlus size={32} color="#ffffff" />
    </CreateOrphanage>
  </Container>
);

export default OrphanagesMap;
