import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Result from '../screens/Result';
import NumberCheck from '../screens/NumberCheck';
import HandWrite from '../screens/HandWrite';
import Letters from '../screens/Letters';
import EmotionList from '../screens/EmotionList';
import VoiceScreen from '../screens/Voice';
import Pointing from '../screens/Pointing';
import Game from '../screens/Game';
import VideoEmotion from '../screens/VideoEmotion';
import PronounceList from '../screens/PronounceList';
import EmotionReport from '../screens/EmotionReport';
// import  from '../screens/ForgotPassword';
import TestChart from '../screens/chart';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
// import backimg from '../assets/images/arrow-back-12-512.png';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Letters"
          options={{headerShown: false}}
          component={Letters}
        />
        {/* <Stack.Screen
          name="ForgotPassword"
          options={{headerShown: false}}
          component={ForgotPassword}
        /> */}
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="EmotionList"
          options={{headerShown: false}}
          component={EmotionList}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="NumberCheck"
          options={{headerShown: false}}
          component={NumberCheck}
        />
        <Stack.Screen
          name="Result"
          options={{headerShown: false}}
          component={Result}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="HandWrite"
          options={{headerShown: false}}
          component={HandWrite}
        />
        <Stack.Screen
          name="VoiceScreen"
          options={{headerShown: false}}
          component={VoiceScreen}
        />
        <Stack.Screen
          name="Game"
          options={{headerShown: false}}
          component={Game}
        />
        <Stack.Screen
          name="EmotionReport"
          options={{headerShown: false}}
          component={EmotionReport}
        />
        <Stack.Screen
          name="Pointing"
          options={{headerShown: false}}
          component={Pointing}
        />
        <Stack.Screen
          name="VideoEmotion"
          options={{headerShown: false}}
          component={VideoEmotion}
        />        
        <Stack.Screen
          name="PronounceList"
          options={{headerShown: false}}
          component={PronounceList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
