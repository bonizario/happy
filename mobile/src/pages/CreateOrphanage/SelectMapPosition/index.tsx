import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Marker, MapEvent, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';
import { Container, StyledMapView, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
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
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </StyledMapView>

      {position.latitude !== 0 && (
        <NextButton
          onPress={() => navigation.navigate('OrphanageData', { position })}
        >
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
