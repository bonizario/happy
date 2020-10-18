import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const StyledMapView = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 0 16px;
  border-radius: 16px;
  justify-content: center;
  background-color: #ffffff;
`;

export const CalloutText = styled.Text`
  color: #0089a5;
  font-size: 14px;
  font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;
  height: 56px;
  padding-left: 24px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  elevation: 3;
`;

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-size: 15px;
  font-family: 'Nunito_700Bold';
`;

export const CreateOrphanageButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #15c3d6;
`;
