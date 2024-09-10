import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CharacterDetailScreen({ route, navigation }) {
  const { character } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({

      title: 'Character information',
      headerTitleAlign: 'center', 

      headerStyle: {
        backgroundColor: rgb(160, 0, 160)
      },

      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: rgb(0,0,0)
      },

    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.characterName}>{character.name.toUpperCase()}</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Altura {character.height}cm</Text>
        <Text style={styles.infoText}>{character.mass}kg</Text>
        <Text style={styles.infoText}>{character.hair_color}</Text>
        <Text style={styles.infoText}>{character.skin_color}</Text>
        <Text style={styles.infoText}>{character.eye_color}</Text>
        <Text style={styles.infoText}>{character.gender}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Starships', { character })}
      >
        <Text style={styles.buttonText}>Ships</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Movies', { character })}
      >
        <Text style={styles.buttonText}>Movies</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: rgb(160, 0, 160)
  },

  characterName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  infoContainer: {
    marginBottom: 40
  },

  infoText: {
    fontSize: 16,
    textAlign: 'center'
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: rgb(0,0,0)
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: rgb(255,255,255)
  },

});
