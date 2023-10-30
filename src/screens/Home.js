/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/bgchild.jpg')}>

        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Letters')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
            <Icon name="highlighter" size={40} color={COLORS.primary} />
              <Text style={styles.text001}>Hand Writing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NumberCheck')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
            <Icon name="sort-numeric-up" size={40} color={COLORS.primary} />

              <Text style={styles.text001}>Number</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pointing')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
            <Icon name="hand-point-right" size={40} color={COLORS.primary} />
           
              <Text style={styles.text001}>Pointing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmotionList')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
            <Icon name="laugh-squint" size={40} color={COLORS.primary} />

              <Text style={styles.text001}>Emotional Level</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('voice')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
            <Icon name="microphone-alt" size={40} color={COLORS.primary} />
           
              <Text style={styles.text001}>Pronounce</Text>
            </View>
          </TouchableOpacity>
         
        </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  slide1: {
    // backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    maxWidth: SIZES.width * 0.3,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.black,
    fontSize: 15,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.3,
    marginBottom:100,
    padding:30

  },
  title1: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    // marginLeft: SIZES.width * 0.06,
    // marginRight: SIZES.width * 0.06,
  },  mainBody: {
    // backgroundColor: '#FAFAFA',
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
