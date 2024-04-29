import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

const HockeyHome = () => {
  const [shotsHome, setShotsHome] = useState(0);
  const [shotOnNetHome, setShotsOnNetHome] = useState(0);
  const [goalHome, setGoalHome] = useState(0);

  const [shotsAway, setShotsAway] = useState(0);
  const [shotOnNetAway, setShotsOnNetAway] = useState(0);
  const [goalAway, setGoalAway] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [decrementFunction, setDecrementFunction] = useState(null);

  const handleShotsOnNetIncrement = () => {
    setShotsOnNetHome((prev) => prev + 1);
    setShotsHome((prev) => prev + 1); // Increment shots along with shots on net
  };

  const handleGoalIncrement = () => {
    setGoalHome((prev) => prev + 1);
    setShotsOnNetHome((prev) => prev + 1); // Increment shots on net along with goal
    setShotsHome((prev) => prev + 1); // Increment shots along with goal
  };

  const handleIncrement = (setter) => {
    setter((prev) => prev + 1);
  };

  const handleDecrement = (setter) => {
    setDecrementFunction(() => setter);
    setShowModal(true);
  };

  const confirmDecrement = () => {
    decrementFunction((prev) => prev - 1);
    setShowModal(false);
  };

  const data = [
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsHome),
      onPressMinus: () => handleDecrement(setShotsHome),
      value: shotsHome
    },
    {
      title: "Shots on Net",
      onPressPlus: () => handleShotsOnNetIncrement(),
      onPressMinus: () => handleDecrement(setShotsOnNetHome),
      value: shotOnNetHome
    },
    {
      title: "Goal",
      onPressPlus: () => handleGoalIncrement(),
      onPressMinus: () => handleDecrement(setGoalHome),
      value: goalHome
    },
  ];

  const additionalData = [
    {
      title: "Shots",
      onPressPlus: () => handleIncrement(setShotsAway),
      onPressMinus: () => handleDecrement(setShotsAway),
      value: shotsAway
    },
    {
      title: "Shots on Net",
      onPressPlus: () => handleShotsOnNetIncrement(),
      onPressMinus: () => handleDecrement(setShotsOnNetAway),
      value: shotOnNetAway
    },
    {
      title: "Goal",
      onPressPlus: () => handleGoalIncrement(),
      onPressMinus: () => handleDecrement(setGoalAway),
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
      // marginVertical: 5,
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
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {data.map((item, index) => (
          <View key={index} style={[styles.section, (index === 2 || index === 5) && styles.noBorderBottom]}>
            <TouchableOpacity onPress={item.onPressMinus}>
              <Text style={styles.sectionText}>{'-'}</Text>
            </TouchableOpacity>
            <View style={styles.numberContainer}>
              <Text style={styles.sectionText}>{item.value}</Text>
              <Text>{item.title}</Text>
            </View>
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
          <View key={index} style={[styles.section, (index === 2 || index === 5) && styles.noBorderBottom]}>
            <TouchableOpacity onPress={item.onPressMinus}>
              <Text style={styles.sectionText}>{'-'}</Text>
            </TouchableOpacity>
            <View style={styles.numberContainer}>
              <Text style={styles.sectionText}>{item.value}</Text>
              <Text>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={item.onPressPlus}>
              <Text style={styles.sectionText}>{'+'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
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
