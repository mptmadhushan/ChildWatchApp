import React from 'react';
import { View, Text,ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const AlphabetButtons = ({ onLetterPress,navigation }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const renderAlphabetButtons = () => {
    return alphabet.split('').map((letter) => (
      <TouchableOpacity
        key={letter}
        style={styles.button}
        onPress={() =>  navigation.navigate('HandWrite')}
      >
        <Text style={styles.buttonText}>{letter}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ImageBackground source={require('../assets/bgchild.jpg')} style={styles.container}>
      {renderAlphabetButtons()}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',

    flex:1
  },
  button: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AlphabetButtons;
