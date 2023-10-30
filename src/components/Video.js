import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Video from 'react-native-video';

const LocalVideoPlayer = () => {
  const words = ['clam01.mp4', 'clam02.mp4', 'clam03.mp4'];

  const [randomWord, setRandomWord] = useState(words[0]); // Initial source

  useEffect(() => {
    generateRandomWord();
  }, []);
const mm='happy'
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    setRandomWord(selectedWord);
  };

  return (
    <View style={styles.container}>
      <Video
        
        
        source={require(`../assets/${mm}.mp4`)}
        style={styles.video}
        controls={true}
      />
      <Button title="Change Video" onPress={generateRandomWord} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default LocalVideoPlayer;
