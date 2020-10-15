import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import SideBar from '../../components/SideBar';
import MapContainer from '../../components/MapContainer';
import mapIcon from '../../utils/mapIcon';
import {
  Container,
  Main,
  InputBlock,
  ButtonSelect,
  SubmitButton,
} from './styles';

const CreateOrphanage: React.FC = () => (
  <Container>
    <SideBar />

    <Main>
      <form>
        <fieldset>
          <legend>Dados</legend>

          <MapContainer>
            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 242 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <footer>
              <p>Clique no mapa para adicionar a localização</p>
            </footer>
          </MapContainer>

          <InputBlock>
            <label htmlFor="name">Nome</label>
            <input id="name" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="about">
              Sobre <span>Máximo de 300 caracteres</span>
            </label>
            <textarea id="name" maxLength={300} />
          </InputBlock>

          <InputBlock>
            <label htmlFor="images">Fotos</label>

            <div className="uploaded-image" />

            <button type="button">
              <FiPlus size={24} color="#15b6d6" />
            </button>
          </InputBlock>
        </fieldset>

        <fieldset>
          <legend>Visitação</legend>

          <InputBlock>
            <label htmlFor="instructions">Instruções</label>
            <textarea id="instructions" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="opening_hours">Nome</label>
            <input id="opening_hours" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="open_on_weekends">Atende fim de semana</label>

            <ButtonSelect>
              <button type="button" className="active">
                Sim
              </button>
              <button type="button">Não</button>
            </ButtonSelect>
          </InputBlock>
        </fieldset>

        <SubmitButton type="submit">Confirmar</SubmitButton>
      </form>
    </Main>
  </Container>
);

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
