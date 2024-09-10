import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterListScreen from './pages/CharacterListScreen';
import CharacterDetailScreen from './pages/CharacterDetailScreen';
import StarshipScreen from './pages/StarshipScreen';
import MovieScreen from './pages/MovieScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Characters" component={CharacterListScreen} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
        <Stack.Screen name="Starships" component={StarshipScreen} />
        <Stack.Screen name="Movies" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
