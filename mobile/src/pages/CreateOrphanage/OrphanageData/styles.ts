import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface InputProps {
  height?: number;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #5c8599;
  font-size: 24px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`;

export const Label = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito_600SemiBold';
  margin-bottom: 8px;
`;

export const Input = styled.TextInput<InputProps>`
  height: ${props => (props.height ? `${props.height}px` : '56px')};
  background-color: #ffffff;
  border-color: #d3e2e6;
  border-width: 1.4px;
  border-radius: 20px;
  margin-bottom: 16px;
  padding: 18px 24px;
  text-align-vertical: top;
`;

export const ImagesInput = styled(RectButton)`
  height: 56px;
  border-width: 1.4px;
  border-radius: 20px;
  margin-bottom: 32px;
  border-style: dashed;
  border-color: #96d2f0;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;

export const SwitchContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NextButton = styled(RectButton)`
  height: 56px;
  margin-top: 32px;
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

export const UploadedImagesContainer = styled.View`
  flex-direction: row;
`;

export const UploadedImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 32px;
  margin-right: 8px;
`;
