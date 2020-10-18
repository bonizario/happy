import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';
import { Container, StyledMapView, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

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
          icon={mapMarkerImg}
          coordinate={{ latitude: -19.7487441, longitude: -47.9401207 }}
        />
      </StyledMapView>

      <NextButton onPress={() => navigation.navigate('OrphanageData')}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default SelectMapPosition;
