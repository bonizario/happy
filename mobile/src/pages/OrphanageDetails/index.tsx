import React, { useEffect, useState } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';
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

interface IOrphanageDetailsRouteParams {
  id: number;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute();
  const [orphanage, setOrphanage] = useState<IOrphanage>();

  const params = route.params as IOrphanageDetailsRouteParams;

  useEffect(() => {
    (async function loadOrphanages() {
      try {
        const response = await api.get(`orphanages/${params.id}`);

        setOrphanage(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [params.id]);

  if (!orphanage) {
    return null;
  }

  function handleOpenGoogleMapsRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => (
            <StyledImage key={image.id} source={{ uri: image.url }} />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <StyledMapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
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
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </StyledMapView>

          <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem color="blue">
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleText color="blue">
              Segunda à Sexta {orphanage.opening_hours}
            </ScheduleText>
          </ScheduleItem>

          {orphanage.open_on_weekends ? (
            <ScheduleItem color="green">
              <Feather name="info" size={40} color="#39cc83" />
              <ScheduleText color="green">Atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          ) : (
            <ScheduleItem color="red">
              <Feather name="info" size={40} color="#ff669d" />
              <ScheduleText color="red">
                Não Atendemos fim de semana
              </ScheduleText>
            </ScheduleItem>
          )}
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
