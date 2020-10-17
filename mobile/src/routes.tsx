import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
