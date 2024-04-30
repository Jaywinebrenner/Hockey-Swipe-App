import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';

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
  }
  const handleClickingNewGame = () => {
    setGoalHome(0);
    setShotsOnNetHome(0);
    setShotsHome(0);
    setGoalAway(0);
    setShotsOnNetAway(0);
    setShotsAway(0);
    setShowNewGameModal(false);
  }
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
          setGoalAway((prev) => prev - 1); // Correct index for Goal Away
          setShotsOnNetAway((prev) => prev - 1);
          setShotsAway((prev) => prev - 1);
          break;
        case 4:
          setShotsOnNetAway((prev) => prev - 1); // Correct index for Shots on Net Away
          setShotsAway((prev) => prev - 1);
          break;
        case 5:
          setShotsAway((prev) => prev - 1); // Correct index for Shots Away
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
            // Navigate to
            break;
        default:
          break;
      }
      setShowModal(false); // Close modal after resetting state
      setDecrementIndex(null); // Reset decrementIndex
    }
  };
  
  

  const data = [
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsHome),
      onPressMinus: () => handleDecrement(0), // Pass the index directly here
      value: shotsHome
    },
    {
      title: "Shots on Net",
      onPressPlus: () => {
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
      },
      onPressMinus: () => handleDecrement(1), // Pass the index directly here
      value: shotOnNetHome
    },
    {
      title: "Goal",
      onPressPlus: () => {
        setGoalHome((prev) => prev + 1);
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
      },
      onPressMinus: () => handleDecrement(2), // Pass the index directly here
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
        setDecrementIndex(3); // Set the correct index for Goal
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
        setDecrementIndex(4); // Set the correct index for Shots on Net
        setShowModal(true);
      },
      value: shotOnNetAway
    },
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsAway),
      onPressMinus: () => handleDecrement(5), // Pass the correct index here
      value: shotsAway
    },
  ];
  
  
  
  

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },

    plus: {
      fontSize: 50,
      marginHorizontal: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    dataContainer: {
      flex: 1,
    },
    navBar: {
      height: 50,
      backgroundColor: '#5c6bc0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      width: '100%',
    },
    leftNav: {
      flex: 1, 
      alignItems: 'flex-start',
    },
    middleNav: {
      flex: 1, 
      alignItems: 'center', 
    },
    rightNav: {
      flex: 1, 
      alignItems: 'flex-end',
    },
    navText: {
      color: '#fff',
      fontSize: 18,
    },
    logo: {
      height: '60%', 
      resizeMode: 'contain',
    },
    
    section: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    sectionAway: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      backgroundColor: "#4b4848"
    },
    sectionTextAway: {
      fontSize: 50,
      marginHorizontal: 10,
      color: "white"
    },
    plusAway: {
      fontSize: 50,
      marginHorizontal: 30,
      color: "white"
    },
    titleAway: {
      color: "white",
      fontSize: 20,
    },
    sectionText: {
      fontSize: 50,
      marginHorizontal: 10,
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
      textAlign: "center"
    },
    areYouSure: {
      fontSize: 30,
      textAlign: "center"
    },
    areYouSureCopy: {

    },
    yesButtonRed: {
      backgroundColor: 'maroon',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    buttonText: {
      color: "white"
    },
    yesButton: {
      backgroundColor: '#5c6bc0',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    noButton: {
      // backgroundColor: '#5c6bc0',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    buttonTextNoNormal: {
      color: "black"
    },
    buttonTextYes: {
      color: "white"
    }
  });

  return (
    <View style={styles.container}>
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
      <View style={styles.navBar}>
        <View style={styles.leftNav}>
          <TouchableOpacity onPress={() => {
            setShowHomeModal(true);
          }}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleNav}>
          <Image source={require('./assets/hurdler.png')} style={styles.logo} />
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => setShowNewGameModal(true)}>
            <Text style={styles.navText}>New Game</Text>
          </TouchableOpacity>
        </View>
      </View>

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

      {/* Decriment Modal */}
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

      {/* HOME MODAL */}
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

       {/* NEW GAME MODAL */}
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
              {/* <Button style={styles.yesButton} title="Yes" onPress={() => handleClickingNewGame()} />
              <Button style={styles.noButton} title="No" onPress={() => setShowNewGameModal(false)} /> */}
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
  );
};

export default HockeyGame;
