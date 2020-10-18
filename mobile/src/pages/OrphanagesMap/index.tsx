import React from 'react';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../../images/map-marker.png';
import {
  Container,
  StyledMapView,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <Container>
      <StyledMapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -19.7487441,
          longitude: -47.9401207,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.9,
            y: 0.85,
          }}
          coordinate={{
            latitude: -19.7487441,
            longitude: -47.9401207,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <CalloutContainer>
              <CalloutText>Lar das Meninas</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </StyledMapView>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#ffffff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;