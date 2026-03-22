import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { backgroundColor: '#6C63FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Мої нотатки' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Нова нотатка' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Нотатка' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Про додаток' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
