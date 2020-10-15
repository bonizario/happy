import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import SideBar from '../../components/SideBar';
import MapContainer from '../../components/MapContainer';
import mapIcon from '../../utils/mapIcon';
import {
  Container,
  Main,
  ImagesContainer,
  OrphanageDetails,
  OpeningDetails,
  ContactButton,
} from './styles';
import api from '../../services/api';

interface IOrphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface IRouteParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<IRouteParams>();
  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <SideBar />

      <Main>
        <div>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <ImagesContainer>
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </ImagesContainer>

          <OrphanageDetails>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 242 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpeningDetails openOnWeekends={orphanage.open_on_weekends}>
              <div>
                <FiClock size={32} color="var(--color-blue)" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div>
                  <FiInfo size={32} color="var(--color-green)" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div>
                  <FiInfo size={32} color="var(--color-red)" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </OpeningDetails>

            <ContactButton type="button">
              <FaWhatsapp size={20} color="var(--color-white)" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetails>
        </div>
      </Main>
    </Container>
  );
};

export default Orphanage;
