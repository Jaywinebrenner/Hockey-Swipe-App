import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Animated } from 'react-native';

const HockeyHome = () => {
  const [shotsHome, setShotsHome] = useState(0);
  const [shotOnNetHome, setShotsOnNetHome] = useState(0);
  const [goalHome, setGoalHome] = useState(0);
  const [shotsAway, setShotsAway] = useState(0);
  const [shotOnNetAway, setShotsOnNetAway] = useState(0);
  const [goalAway, setGoalAway] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [decrementFunction, setDecrementFunction] = useState(null);
  const [decrementIndex, setDecrementIndex] = useState(null); // New state to store the index of the item being decremented

  // Animated values for opacity
  const animatedOpacities = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  const handleIncrement = (setter, index) => {
    setter((prev) => prev + 1);
    animateOpacity(index);
  };

  const handleDecrement = (index, setter) => { // Modified handleDecrement to accept index and setter
    setDecrementFunction(() => setter);
    setDecrementIndex(index);
    setShowModal(true);
  };

  const animateOpacity = (index) => {
    const adjustedIndex = index % 3; // Ensure index is within range [0, 2]
    Animated.sequence([
      Animated.timing(animatedOpacities[adjustedIndex * 2], {
        toValue: 0.3,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacities[adjustedIndex * 2], {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  

  const confirmDecrement = () => {
    console.log("Confirm decrement called");
    console.log("Decrement function:", decrementFunction);
    
    if (decrementIndex !== null) {
      switch (decrementIndex) {
        case 0:
          decrementShots();
          break;
        case 1:
          decrementShotsOnNet();
          break;
        case 2:
          decrementGoal();
          break;
        case 3:
          decrementShotsAway();
          break;
        case 4:
          decrementShotsOnNetAway();
          break;
        case 5:
          decrementGoalAway();
          break;
        default:
          break;
      }
    }
    setShowModal(false);
  };

  const decrementShots = () => {
    setShotsHome((prev) => prev - 1);
    setShotsAway((prev) => prev - 1);
    animateOpacity(0);
  };

  const decrementShotsOnNet = () => {
    setShotsOnNetHome((prev) => prev - 1);
    setShotsHome((prev) => prev - 1);
    animateOpacity(1);
  };

  const decrementGoal = () => {
    setGoalHome((prev) => prev - 1);
    setShotsOnNetHome((prev) => prev - 1);
    setShotsHome((prev) => prev - 1);
    animateOpacity(2);
  };

  const decrementShotsAway = () => {
    setShotsAway((prev) => prev - 1);
    animateOpacity(3);
  };

  const decrementShotsOnNetAway = () => {
    setShotsOnNetAway((prev) => prev - 1);
    setShotsAway((prev) => prev - 1);
    animateOpacity(4);
  };

  const decrementGoalAway = () => {
    setGoalAway((prev) => prev - 1);
    setShotsOnNetAway((prev) => prev - 1);
    setShotsAway((prev) => prev - 1);
    animateOpacity(5);
  };
  
  const data = [
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsHome, 0),
      onPressMinus: () => handleDecrement(0, setShotsHome), // Pass index and setter function
      value: shotsHome
    },
    {
      title: "Shots on Net",
      onPressPlus: () => {
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
        animateOpacity(1);
      },
      onPressMinus: () => handleDecrement(1, setShotsOnNetHome), // Pass index and setter function
      value: shotOnNetHome
    },
    {
      title: "Goal",
      onPressPlus: () => {
        setGoalHome((prev) => prev + 1);
        setShotsOnNetHome((prev) => prev + 1);
        setShotsHome((prev) => prev + 1);
        animateOpacity(2);
      },
      onPressMinus: () => handleDecrement(2, setGoalHome), // Pass index and setter function
      value: goalHome
    },
  ];

  const additionalData = [
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsAway, 3),
      onPressMinus: () => handleDecrement(3, setShotsAway),
      value: shotsAway
    },
    {
      title: "Shots on Net",
      onPressPlus: () => {
        setShotsOnNetAway((prev) => prev + 1);
        setShotsAway((prev) => prev + 1);
        animateOpacity(4);
      },
      onPressMinus: () => handleDecrement(4, setShotsOnNetAway),
      value: shotOnNetAway
    },
    {
      title: "Goal",
      onPressPlus: () => {
        setGoalAway((prev) => prev + 1);
        setShotsOnNetAway((prev) => prev + 1);
        setShotsAway((prev) => prev + 1);
        animateOpacity(5);
      },
      onPressMinus: () => handleDecrement(5, setGoalAway),
      value: goalAway
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    dataContainer: {
      flex: 1,
      padding: 10,
    },
    navBar: {
      height: 50,
      backgroundColor: '#5c6bc0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navText: {
      color: '#fff',
      fontSize: 18,
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
      fontSize: 30,
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
              <Text style={styles.sectionText}>{'-'}</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.numberContainer, { opacity: animatedOpacities[index * 2] }]}>
              <Text style={styles.sectionText}>{item.value}</Text>
              <Text>{item.title}</Text>
            </Animated.View>
            <TouchableOpacity onPress={item.onPressPlus}>
              <Text style={styles.sectionText}>{'+'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.navBar}>
        <Text style={styles.navText}>Navigation Bar</Text>
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
              <Text style={styles.sectionText}>{'-'}</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.numberContainer, { opacity: animatedOpacities[index * 2 + 3] }]}>
              <Text style={styles.sectionText}>{item.value}</Text>
              <Text>{item.title}</Text>
            </Animated.View>
            <TouchableOpacity onPress={item.onPressPlus}>
              <Text style={styles.sectionText}>{'+'}</Text>
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
              <Button title="Yes" onPress={confirmDecrement} />
              <Button title="No" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HockeyHome;
