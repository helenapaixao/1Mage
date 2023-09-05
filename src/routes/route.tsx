import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './auth.routes';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthRoutes} />
        <Stack.Screen name="Main" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
