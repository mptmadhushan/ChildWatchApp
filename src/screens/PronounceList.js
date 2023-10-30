import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  // const {resData} = route.params;
  const symptoms = ['Apple', 'Banana', 'Mango', 'Chair', 'Table'];


  return (
    <ImageBackground   source={require('../assets/bgchild.jpg')} style={styles.container} >
     
      <ScrollView>
        <View style={{alignItems: 'center', paddingHorizontal: 20,marginTop:200}}>
          {symptoms &&
            symptoms.map(list => (
              <TouchableOpacity onPress={() => {
                navigation.navigate('VoiceScreen', { name: list });
              }} style={styles.des} key={list.index}>
               <Text style={styles.btnText}> {list}</Text>
              </TouchableOpacity>
            ))}
          {/* <Text style={styles.title}>Solutions</Text> */}
          {/* 
          {result.solutions &&
            result.solutions.map(list => ( */}
          {/* <Text style={styles.des}>
            Overall, incorporating coconut into your diet and beauty routine can
            have many health and beauty benefits.
          </Text> */}
          {/* // ))} */}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>Home</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.25,
    marginBottom: 100,
    padding: 30,
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.black,
    fontSize: 25,
    textAlign: 'center',
    paddingHorizontal: 20,
    borderRadius: 50,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: COLORS.primary,
  },
  title2: {
    // marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
