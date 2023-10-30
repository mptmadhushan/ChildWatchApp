/* eslint-disable react-native/no-inline-styles */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import firebase from '../helpers/firebase';

import Toast from 'react-native-simple-toast';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import APIKit from '../helpers/apiKit';

import AsyncStorage from '@react-native-community/async-storage';
const VoiceScreen = ({navigation}) => {
  useEffect(() => {});

  const [email, setEmail] = useState('');
  const [userPasswor, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const storeData = async value => {
    console.log(value);

    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      navigation.navigate('Home');
    } catch (e) {
      // saving error
    }
  };
  const handle =() => {
    setTimeout(function () {
      if(!result){
      setResult('Correct');
      }else{
      setResult('Wrong');
      }
    }, 5000);
  };
  const onPressLogin = () => {
    navigation.navigate('Home');

    // const username = email;
    // const password = userPasswor;
    // // navigation.navigate('Home');
    // // const payload = {password, username};
    // console.log('send data', username,password);
    // if (!username) {
    //   Toast.showWithGravity('Please enter username', Toast.LONG, Toast.TOP);
    // }
    // if (!password) {
    //   Toast.showWithGravity('Please enter password', Toast.LONG, Toast.TOP);
    // } else {
    //   firebase
    //   .auth()
    //   .signInWithEmailAndPassword(username, password)
    //   .then((res) => {
    // navigation.navigate('Home');
     
    //     console.log('User registered successfully!')
        
    //     })
    // }
  };
  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/bgchild.jpg')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          width: SIZES.width,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.centerFlex}>
          <Image
                style={{
                  width: 200,
                  maxHeight: 200,
                  resizeMode: 'contain',
                }}
                source={require('../assets/icons/voc.png')}
              />
           <Text style={styles.title}>{result}</Text>
          </View>
         

          <View style={styles.centerFlex}>
          

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => handle()}>
              <Text style={styles.buttonTextStyle}>Press to start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => onPressLogin()}>
              <Text style={styles.buttonTextStyle}>Home</Text>
            </TouchableOpacity>
            {/* <Button
              title="Google Sign-In"
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }
            /> */}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
export default VoiceScreen;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTextStyle2: {
    color:COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.3,
  },
  title: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rowFlex: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
  },
  mainBody: {
    // backgroundColor: '#FAFAFA',
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'center',
  },
  SectionStyle: {
    // backgroundColor: COLORS.secondary,
    // borderColor: COLORS.white,
    height: 40,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
    marginTop: 50,
    color: COLORS.black,
    height: 40,
    width: 130,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 50,
    flex: 1,
    color: COLORS.black,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: COLORS.black,
    width: SIZES.width * 0.7,
  },
  inputStyleError: {
    flex: 1,
    color: COLORS.third,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
  registerTextStyle: {
    color: '#4c5a5b',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.05,
  },
});
