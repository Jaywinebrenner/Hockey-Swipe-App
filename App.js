import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import the HomeScreen component
import HockeyGame from './HockeyGame';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="HockeyGame" component={HockeyGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
