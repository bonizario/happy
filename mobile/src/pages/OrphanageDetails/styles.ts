import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

interface IScheduleItem {
  color?: 'blue' | 'green' | 'red';
}

interface IScheduleText {
  color?: 'blue' | 'green' | 'red';
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const StyledImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 240px;
  resize-mode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const Description = styled.Text`
  color: #5c8599;
  font-size: 15px;
  margin-top: 16px;
  line-height: 24px;
  font-family: 'Nunito_600SemiBold';
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  background-color: #e6f7fb;
`;

export const StyledMapView = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled(RectButton)`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  color: #0089a5;
  font-family: 'Nunito_700Bold';
`;

export const Separator = styled.View`
  width: 100%;
  height: 0.8px;
  background-color: #d3e2e6;
  margin-vertical: 40px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItem = styled.View<IScheduleItem>`
  width: 48%;
  padding: 20px;

  ${props =>
    props.color === 'blue' &&
    css`
      border-width: 1px;
      border-radius: 20px;
      border-color: #b3dae2;
      background-color: #e6f7fb;
    `}

  ${props =>
    props.color === 'green' &&
    css`
      border-width: 1px;
      border-radius: 20px;
      border-color: #a1e9c5;
      background-color: #edfff6;
    `}

  ${props =>
    props.color === 'red' &&
    css`
      border-width: 1px;
      border-radius: 20px;
      border-color: #ffbcd4;
      background-color: #fef6f9;
    `}
`;

export const ScheduleText = styled.Text<IScheduleText>`
  font-size: 16px;
  margin-top: 20px;
  line-height: 24px;
  font-family: 'Nunito_600SemiBold';

  ${props =>
    props.color === 'blue' &&
    css`
      color: #5c8599;
    `}

  ${props =>
    props.color === 'green' &&
    css`
      color: #37c77f;
    `}

  ${props =>
    props.color === 'red' &&
    css`
      color: #ff669d;
    `}
`;

export const ContactButton = styled(RectButton)`
  height: 56px;
  margin-top: 40px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3cdc8c;
`;

export const ContactButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin-left: 16px;
  font-family: 'Nunito_800ExtraBold';
`;
