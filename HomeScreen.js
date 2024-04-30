import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Hockey Swipe</Text>
      <Image source={require('./assets/hurdler.png')} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HockeyGame')}
      >
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#5c6bc0',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  logo: {
    marginTop: 20,
    width: 100, // Adjust the width of the logo
    height: 100, // Adjust the height of the logo
    resizeMode: 'contain', // Ensure the logo fits within the specified dimensions
  },
});

export default HomeScreen;
