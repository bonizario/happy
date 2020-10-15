import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';
import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import {
  Container,
  SideBar,
  Header,
  Footer,
  CreateOrphanage,
  OrphanageDetail,
} from './styles';

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
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

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              className="map-popup"
              closeButton={false}
              minWidth={240}
              maxWidth={240}
            >
              {orphanage.name}
              <OrphanageDetail to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="var(--color-white)" />
              </OrphanageDetail>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="var(--color-white)" />
      </CreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
