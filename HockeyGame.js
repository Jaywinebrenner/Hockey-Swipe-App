import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';


const HockeyGame = ({ navigation }) => {
  const [shotsHome, setShotsHome] = useState(0);
  const [shotOnNetHome, setShotsOnNetHome] = useState(0);
  const [goalHome, setGoalHome] = useState(0);
  const [shotsAway, setShotsAway] = useState(0);
  const [shotOnNetAway, setShotsOnNetAway] = useState(0);
  const [goalAway, setGoalAway] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showHomeModal, setShowHomeModal] = useState(false);
  const [showNewGameModal, setShowNewGameModal] = useState(false);
  const [decrementIndex, setDecrementIndex] = useState(null);
  

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });
  
  if (!fontsLoaded) {
    return null; 
  }
  const handleIncrement = (setter) => {
    setter((prev) => prev + 1);
  };


  const handleDecrement = (index) => {
    setDecrementIndex(index);
    setShowModal(true);
  };

  const handleClickingHome = () => {
    setShowHomeModal(false);
    navigation.navigate('Home');
  };
  
  const handleClickingNewGame = () => {
    setGoalHome(0);
    setShotsOnNetHome(0);
    setShotsHome(0);
    setGoalAway(0);
    setShotsOnNetAway(0);
    setShotsAway(0);
    setShowNewGameModal(false);
  };
  
  const resetState = () => {
    if (decrementIndex !== null) {
      switch (decrementIndex) {
        case 0:
          setShotsHome((prev) => prev - 1);
          break;
        case 1:
          setShotsOnNetHome((prev) => prev - 1);
          setShotsHome((prev) => prev - 1);
          break;
        case 2:
          setGoalHome((prev) => prev - 1);
          setShotsOnNetHome((prev) => prev - 1);
          setShotsHome((prev) => prev - 1);
          break;
        case 3:
          setGoalAway((prev) => prev - 1);
          setShotsOnNetAway((prev) => prev - 1);
          setShotsAway((prev) => prev - 1);
          break;
        case 4:
          setShotsOnNetAway((prev) => prev - 1);
          setShotsAway((prev) => prev - 1);
          break;
        case 5:
          setShotsAway((prev) => prev - 1);
          break;
        case 6:
          setGoalHome(0);
          setShotsOnNetHome(0);
          setShotsHome(0);
          setGoalAway(0);
          setShotsOnNetAway(0);
          setShotsAway(0);
          break;
        case 7:
          setGoalHome(0);
          setShotsOnNetHome(0);
          setShotsHome(0);
          setGoalAway(0);
          setShotsOnNetAway(0);
          setShotsAway(0);
          break;
        default:
          break;
      }
      setShowModal(false);
      setDecrementIndex(null);
    }
  };

  const data = [
    {
      title: "Shot Attempts",
      onPressPlus: () => handleIncrement(setShotsHome),
      onPressMinus: () => handleDecrement(0),
      value: shotsHome
    },
    {
      title: "Shots on Net",
      onPressPlus: () => {
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
      },
      onPressMinus: () => handleDecrement(1),
      value: shotOnNetHome
    },
    {
      title: "Goal",
      onPressPlus: () => {
        setGoalHome((prev) => prev + 1);
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
      },
      onPressMinus: () => handleDecrement(2),
      value: goalHome
    },
  ];

  const additionalData = [
    {
      title: "Goal",
      onPressPlus: () => {
        setGoalAway((prev) => prev + 1);
        setShotsOnNetAway((prev) => prev + 1);
        setShotsAway((prev) => prev + 1);
      },
      onPressMinus: () => {
        setDecrementIndex(3);
        setShowModal(true);
      },
      value: goalAway
    },
    {
      title: "Shots on Net",
      onPressPlus: () => {
        setShotsOnNetAway((prev) => prev + 1);
        setShotsAway((prev) => prev + 1);
      },
      onPressMinus: () => {
        setDecrementIndex(4);
        setShowModal(true);
      },
      value: shotOnNetAway
    },
    {
      title: "Shot Attempts",
      onPressPlus: () => handleIncrement(setShotsAway),
      onPressMinus: () => handleDecrement(5),
      value: shotsAway
    },
  ];

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontFamily: 'JosefinSans_400Regular', 
    },
    plus: {
      fontSize: 60,
      marginHorizontal: 30,
      fontFamily: 'JosefinSans_400Regular', 
    },
    container: {
      flex: 1,
      marginTop: 30
    },
    dataContainer: {
      flex: 1,
    },
    navBar: {
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      width: '100%',
      borderBottomWidth: 3,
      borderBottomColor: '#00AEEF',
      borderTopWidth: 3,
      borderTopColor: '#00AEEF',
      backgroundColor: '#00AEEF'
    },
    homeText: {
      fontSize: 16,
      marginLeft: 20,
      fontFamily: 'JosefinSans_400Regular', 
    },
    leftNav: {
      flex: 1,
      alignItems: 'flex-start',
    },
    middleNav: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'transparent',
      marginRight: 30
    },
    
    rightNav: {
      flex: 1,
      alignItems: 'flex-end'
    },
    arrow: {
      height: 33,
      width: 33,
      // marginRight: 30
    },
    navText: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'JosefinSans_400Regular', 
    },
    logo: {
      height: 30, 
      resizeMode: 'contain',
      marginLeft: 35,
      textAlign: 'center'
    },
    logoTextImage: {
      height: 14, 
      resizeMode: 'contain',

    },
    section: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#00AEEF',
      backgroundColor: 'white'
    },
    sectionAway: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#00AEEF',
      backgroundColor: 'white'
    },
    sectionTextAway: {
      fontSize: 60,
      marginHorizontal: 10,
      color: '#00AEEF',
      fontFamily: 'JosefinSans_400Regular', 
    },
    plusAway: {
      fontSize: 60,
      marginHorizontal: 30,
      color: '#00AEEF',
      fontFamily: 'JosefinSans_400Regular', 
    },
    titleAway: {
      color: '#00AEEF',
      fontSize: 20,
      fontFamily: 'JosefinSans_400Regular', 
    },
    sectionText: {
      fontSize: 60,
      marginHorizontal: 10,
      fontFamily: 'JosefinSans_400Regular', 
    },
    numberContainer: {
      alignItems: 'center',
    },
    noBorderBottom: {
      borderBottomWidth: 0,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    modalTextWrapper: {
      textAlign: 'center',
    },
    areYouSure: {
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'JosefinSans_400Regular', 
    },
    areYouSureCopy: {},
    yesButtonRed: {
      backgroundColor: '#f1592a',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
      fontFamily: 'JosefinSans_400Regular', 
    },
    buttonText: {
      color: 'white',
      fontFamily: 'JosefinSans_400Regular', 
    },
    yesButton: {
      backgroundColor: '#f1592a',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
      fontFamily: 'JosefinSans_400Regular', 
    },
    noButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
      fontFamily: 'JosefinSans_400Regular', 
    },
    buttonTextNoNormal: {
      color: 'black',
      fontFamily: 'JosefinSans_400Regular', 
    },
    buttonTextYes: {
      color: 'white',
      fontFamily: 'JosefinSans_400Regular', 
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <ImageBackground  style={styles.backgroundImage}>
      <View style={styles.container}>
        <StatusBar style="dark" color="red" />
        <View style={styles.dataContainer}>
          {data.map((item, index) => (
            <View 
              key={index} 
              style={[
                styles.section, 
                (index === 2 || index === 5) && styles.noBorderBottom,
              ]}
            >
              <TouchableOpacity onPress={item.onPressMinus}>
                <Text style={styles.plus}>{'-'}</Text>
              </TouchableOpacity>
              <View style={styles.numberContainer}>
                <Text style={styles.sectionText}>{item.value}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <TouchableOpacity onPress={item.onPressPlus}>
                <Text style={styles.plus}>{'+'}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* <ImageBackground source={require('./assets/goalkeeper/blue-bg-net-iphone.png')} style={styles.background}> */}
          <View style={styles.navBar} source={require('./assets/goalkeeper/blue-bg-net-iphone.png')}>
            <View style={styles.leftNav}>
            </View>
            <View style={styles.middleNav}>
            <TouchableOpacity onPress={() => setShowHomeModal(true)}>
              <Image source={require('./assets/goalkeeper/goalkeeper-white.png')} style={styles.logo} />
              </TouchableOpacity>
            </View>
            <View style={styles.rightNav}>
              <TouchableOpacity onPress={() => setShowNewGameModal(true)}>
                <Image source={require('./assets/goalkeeper/refresh.png')} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </View>
        {/* </ImageBackground> */}
        <View style={styles.dataContainer}>
          {additionalData.map((item, index) => (
            <View 
              key={index} 
              style={[
                styles.sectionAway, 
                (index === 2 || index === 5) && styles.noBorderBottom,
              ]}
            >
              <TouchableOpacity onPress={item.onPressMinus}>
                <Text style={styles.plusAway}>{'-'}</Text>
              </TouchableOpacity>
              <View style={styles.numberContainer}>
                <Text style={styles.sectionTextAway}>{item.value}</Text>
                <Text style={styles.titleAway}>{item.title}</Text>
              </View>
              <TouchableOpacity onPress={item.onPressPlus}>
                <Text style={styles.plusAway}>{'+'}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.areYouSure}>Are you sure?</Text>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.yesButton} onPress={() => resetState()}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setShowModal(false)}>
                  <Text style={styles.buttonTextNoNormal}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showHomeModal}
          onRequestClose={() => setShowHomeModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.areYouSure}>Are you sure?</Text>
                <Text style={styles.areYouSureCopy}>The game scores will be erased</Text>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.yesButtonRed} onPress={() => handleClickingHome()}>
                  <Text style={styles.buttonTextYes}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setShowHomeModal(false)}>
                  <Text style={styles.buttonTextNo}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showNewGameModal}
          onRequestClose={() => setShowNewGameModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalTextWrapper}>
                <Text style={styles.areYouSure}>Are you sure?</Text>
                <Text style={styles.areYouSureCopy}>The game scores will be erased</Text>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.yesButtonRed} onPress={() => handleClickingNewGame()}>
                  <Text style={styles.buttonTextYes}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setShowNewGameModal(false)}>
                  <Text style={styles.buttonTextNo}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
   </ImageBackground>
  );
};

export default HockeyGame;
