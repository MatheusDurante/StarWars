import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CharacterListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CharacterDetail', { character: item })}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutText}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: rgb(0,0,0),
    padding: 10
  },

  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: rgb(160, 0, 160)
  },

  text: {
    color: rgb(0,0,0),
    fontSize: 16,
    textAlign: 'center'
  },

  aboutButton: {
    position: 'absolute',
    top: 40,
    right: 10,
    padding: 10, 
    borderRadius: 10,
    backgroundColor: rgb(185, 0, 170)
  },

  aboutText: {
    fontSize: 16
  },
  
});
