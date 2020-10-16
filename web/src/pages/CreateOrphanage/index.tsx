import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';
import SideBar from '../../components/SideBar';
import MapContainer from '../../components/MapContainer';
import mapIcon from '../../utils/mapIcon';
import {
  Container,
  Main,
  InputBlock,
  ImagesContainer,
  ButtonSelect,
  SubmitButton,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat: latitude, lng: longitude } = event.latlng;

    setPosition({ latitude, longitude });
  }, []);

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);

      setImages(selectedImages);

      const selectedPreviewImages = selectedImages.map(image =>
        URL.createObjectURL(image)
      );

      setPreviewImages(selectedPreviewImages);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { latitude, longitude } = position;

      const data = new FormData();

      data.append('name', name);
      data.append('about', about);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('instructions', instructions);
      data.append('opening_hours', opening_hours);
      data.append('open_on_weekends', String(open_on_weekends));
      images.forEach(image => {
        data.append('images', image);
      });

      await api.post('orphanages', data);

      alert('Cadastro realizado com sucesso!');

      history.push('/app');
    },
    [
      position,
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
      history,
    ]
  );

  return (
    <Container>
      <SideBar />

      <Main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer>
              <Map
                center={[-19.7473623, -47.9385564]}
                style={{ width: '100%', height: 242 }}
                zoom={15}
                onClick={handleMapClick}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </Map>

              <footer>
                <p>Clique no mapa para adicionar a localização</p>
              </footer>
            </MapContainer>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}
                <label htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </ImagesContainer>
              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <SubmitButton type="submit">Confirmar</SubmitButton>
        </form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
