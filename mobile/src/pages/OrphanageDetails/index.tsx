import React from 'react';
import { ScrollView } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../images/map-marker.png';
import {
  Container,
  ImagesContainer,
  StyledImage,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  StyledMapView,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  ContactButton,
  ContactButtonText,
} from './styles';

const OrphanageDetails: React.FC = () => (
  <Container>
    <ImagesContainer>
      <ScrollView horizontal pagingEnabled>
        <StyledImage
          source={{
            uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
          }}
        />
        <StyledImage
          source={{
            uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
          }}
        />
        <StyledImage
          source={{
            uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
          }}
        />
      </ScrollView>
    </ImagesContainer>

    <DetailsContainer>
      <Title>Orf. Esperança</Title>
      <Description>
        Presta assistência a crianças de 06 a 15 anos que se encontre em
        situação de risco e/ou vulnerabilidade social.
      </Description>

      <MapContainer>
        <StyledMapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -19.7487441,
            longitude: -47.9401207,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
        >
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: -19.7487441,
              longitude: -47.9401207,
            }}
          />
        </StyledMapView>

        <RoutesContainer>
          <RoutesText>Ver rotas no Google Maps</RoutesText>
        </RoutesContainer>
      </MapContainer>

      <Separator />

      <Title>Instruções para visita</Title>
      <Description>
        Venha como se sentir a vontade e traga muito amor e paciência para dar.
      </Description>

      <ScheduleContainer>
        <ScheduleItem color="blue">
          <Feather name="clock" size={40} color="#2ab5d1" />
          <ScheduleText color="blue">Segunda à Sexta 8h às 18h</ScheduleText>
        </ScheduleItem>

        <ScheduleItem color="green">
          <Feather name="info" size={40} color="#39cc83" />
          <ScheduleText color="green">Atendemos fim de semana</ScheduleText>
        </ScheduleItem>
      </ScheduleContainer>

      <ContactButton onPress={() => {}}>
        <FontAwesome name="whatsapp" size={24} color="#FFF" />
        <ContactButtonText>Entrar em contato</ContactButtonText>
      </ContactButton>
    </DetailsContainer>
  </Container>
);

export default OrphanageDetails;
