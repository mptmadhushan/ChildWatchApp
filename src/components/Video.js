import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Video from 'react-native-video';

const LocalVideoPlayer = ({videoPath,navigation}) => {
  const words = ['clam01.mp4', 'clam02.mp4', 'clam03.mp4'];

  const [randomWord, setRandomWord] = useState(words[0]); // Initial source
  console.log('videoPath', videoPath);
  useEffect(() => {
    generateRandomWord();
  }, []);
  const mm = 'Happy';
  const m2m = 'Sad';
  // const mm = videoPath === "Sad"?'Sad' :"Happy"
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    setRandomWord(selectedWord);
  };

  return (
    <View style={styles.container}>
      {videoPath === 'Sad' && (
        <Video
          source={require(`../assets/Sad.mp4`)}
          style={styles.video}
          controls={true}
        />
      )}
      {videoPath === 'Happy' && (
        <Video
          source={require(`../assets/Happy.mp4`)}
          style={styles.video}
          controls={true}
        />
      )}
      {videoPath === 'Neutral' && (
        <Video
          source={require(`../assets/Neutral.mp4`)}
          style={styles.video}
          controls={true}
        />
      )}
      <Button title="Back"   onPress={() => navigation.navigate('EmotionList')} />
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
    width: 500,
    height: 500,
  },
});

export default LocalVideoPlayer;
