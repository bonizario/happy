import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { Container, Title } from './styles';

interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Title>{title}</Title>
      {showCancel ? (
        <BorderlessButton onPress={() => navigation.navigate('OrphanagesMap')}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View style={{ width: 24 }} />
      )}
    </Container>
  );
};

export default Header;
