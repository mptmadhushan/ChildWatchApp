/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {RNCamera} from 'react-native-camera';
// import {BASE_URL} from '../../Config/index';
// import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'react-native-image-picker';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import axios from 'axios';

const MainScreen = ({routes, navigation}) => {
  let camera;
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = useState('');
  const words = ['1', '2', '3', '4'];

  const [randomWord, setRandomWord] = useState('');
  useEffect(() => {
    generateRandomWord()
  }, [])
  
  const generateRandomWord = () => {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    setRandomWord(selectedWord);
  };

  const handlePostRequest = async () => {
    try {
      const apiUrl = 'https://example.com/api'; // Replace with your API endpoint URL
      const response = await axios.post(apiUrl, postData);

      // Handle the response data as needed
      setResponse(response.data);
      setErrorMessage('');
    } catch (error) {
      // Handle any errors that occur during the request
      setResponse('');
      setErrorMessage('Error: ' + error.message);
    }
  };
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response.assets[0].uri);
      const imageUrl = response.assets[0].uri;
      setLoading(true);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let formData = new FormData();
        formData.append('image', {
          uri: response.assets[0].uri,
          type: 'image/jpg',
          name: 'image.jpg',
        });
        fetch('http://127.0.0.1:5000/number/', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
          .then(response => response.json())
          .then(response => {
            const resData = {
              imageSrc: imageUrl,
              result: response,
            };
            console.log('response 🔥', resData);
            console.log(resData);
            setLoading(false);
            navigation.navigate('Result', {resData});
          })
          .catch(err => console.error(err));
      }
    });
  };
  
  const handle =() => {
    setTimeout(function () {
      if(!result){
      setResult('Correct');
      }else{
      setResult('Wrong');
      }
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: SIZES.height * 0.8,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Loader loading={loading} />
        {/* <View style={{width: '100%', height: SIZES.height * 0.8}}> */}
        <RNCamera
          ref={ref => (camera = ref)}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        {/* </View> */}
      </View>
      <LinearGradient
        colors={['transparent', COLORS.secondary, COLORS.primary]}
        style={styles.overlay}>
        <View style={styles.rowFlex}>
          <Text style={styles.text002}>Show Number {randomWord}</Text>
          <Text style={styles.text002}>{result}</Text>
        </View>
        <View style={styles.rowFlex}>
          <TouchableOpacity onPress={() => handle()} style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>check</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  overlay: {
    marginTop: -SIZES.height * 0.2,
    height: SIZES.height * 0.7,
    flex: 1,
  },
  rowFlex: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },  text002: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: COLORS.black,
  },
  slide1: {
    backgroundColor: COLORS.third,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    maxHeight: SIZES.width * 0.15,
  },
  slide2: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.1,
  },
});
