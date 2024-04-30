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
  const [decrementIndex, setDecrementIndex] = useState(null); // New state variable

  const handleIncrement = (setter) => {
    setter((prev) => prev + 1);
  };

  const handleDecrement = (index) => {
    setDecrementIndex(index);
    setShowModal(true);
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
      width: '100%', // Set the width to fill the container
    },
    leftNav: {
      flex: 1, // Take up equal space
      alignItems: 'flex-start',
    },
    middleNav: {
      flex: 1, // Take up equal space
      alignItems: 'center', // Center the logo horizontally
    },
    rightNav: {
      flex: 1, // Take up equal space
      alignItems: 'flex-end',
    },
    navText: {
      color: '#fff',
      fontSize: 18,
    },
    logo: {
      height: '60%', // Take up full height
      resizeMode: 'contain', // Ensure the image is contained within its container
    },
    
    section: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
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
            setShowModal(true);
          }}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleNav}>
          <Image source={require('./assets/hurdler.png')} style={styles.logo} />
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Text style={styles.navText}>New Game</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dataContainer}>
        {additionalData.map((item, index) => (
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure?</Text>
            <View style={styles.modalButtons}>
              <Button title="Yes" onPress={resetState} />
              <Button title="No" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HockeyGame;
