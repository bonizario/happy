import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const StyledMapView = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const NextButton = styled(RectButton)`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
  height: 56px;
  border-radius: 20px;
  background-color: #15c3d6;
  justify-content: center;
  align-items: center;
`;

export const NextButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
  color: #ffffff;
`;
