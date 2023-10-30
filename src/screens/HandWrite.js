import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Signature from 'react-native-signature-canvas';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import axios from 'axios';

const SignatureCapture = ({navigation}) => {
  const signatureRef = useRef(null);
  const [result, setResult] = useState('');
  const handleSignature = signature => {
    setTimeout(function () {
      if(!result){
      setResult('Correct');
      }else{
      setResult('Wrong');
      }
    }, 2000);
    // Handle the captured signature, e.g., save it to a file or send it to a server.
    console.log(signature);
  };

  const clearSignature = ({navigation}) => {
    signatureRef.current.clearSignature();
  };
  const handlePostRequest = async () => {
    try {
      const apiUrl = 'https://example.com/api'; // Replace with your API endpoint URL
      const response = await axios.post(apiUrl, postData);

      setResult('Correct');
      setErrorMessage('');
    } catch (error) {
      // Handle any errors that occur during the request
    }
  };
  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/bgchild.jpg')}>
      <Signature
        ref={signatureRef}
        onOK={handleSignature}
        onEmpty={() => console.log('No signature')}
        descriptionText="Sign above"
        clearText="Clear"
        confirmText="Save"
        webStyle={`
          .m-signature-pad--footer
          {display: none;}
          .m-signature-pad
        `}
      />
<Text style={styles.buttonTextStyle2}>{result}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={clearSignature}>
        <Text style={styles.buttonTextStyle}>Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSignature}>
        <Text style={styles.buttonTextStyle}>Check</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}  onPress={() =>  navigation.navigate('Home')}>
        <Text style={styles.buttonTextStyle}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignatureCapture;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTextStyle2: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
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
