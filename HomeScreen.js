import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/goalkeeper/blue-bg-net-iphone.png')} style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.container}>
        <View style={styles.upperBand}>
          <Text style={styles.upperBandText}>WWW. HURDLERSTUDIOS .COM</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={require('./assets/goalkeeper/logo.png')}  style={styles.logoText} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HockeyGame')}
          >
            <Text style={styles.buttonText}>New Game</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerBand}>
          <Image source={require('./assets/goalkeeper/hurdler.png')} style={styles.hurdler} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensures the lowerBand is at the bottom
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 100, // Ensure content is not hidden behind the status bar
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 20
  },
  middleContainer: {
    alignItems: 'center',
  },
  button: {
    marginTop: 0,
    backgroundColor: '#F1592A',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: "#F1592A"
  },
  logo: {
    width: 200,
    height: 100, // Ensures proper display
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 8, // Android shadow property
  },
  logoText: {
    width: '80%',
    height: 100, // Ensures proper display
    resizeMode: 'contain',
  },
  lowerBand: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  upperBand: {
    backgroundColor: 'white',
  },
  upperBandText: {
    color: "charcoal",
    textAlign: 'center',
    padding: 16,
    fontFamily: 'JosefinSans_400Regular', 
    letterSpacing: 2, 
  },
  hurdler: {
    width: 100, 
    height: 70, 
    resizeMode: 'contain',

  },
});

export default HomeScreen;
