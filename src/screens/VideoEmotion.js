import React,{useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import LocalVideoPlayer from '../components/Video';
import {RNCamera} from 'react-native-camera';

const App = ({ route }) => {
    const { name } = route.params;
console.log('para',name)
let camera;

  return (
    <View style={styles.container}>
      <LocalVideoPlayer videoPath={name} />

        <View
        style={{
          height: 100,
          width:100,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
