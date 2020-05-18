import React from 'react';
import ButtonPage from './src/Screen/C0_ButtonPage';
import Styled from 'styled-components/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import {
  StatusBar,
  View,
} from 'react-native'

//Screens
import Start from './src/Screen/A0_Start';
import Signin from './src/Screen/A1_Signin';
import Main from './src/Screen/C0_ButtonPage';
import EmailAuth from './src/Screen/A3_EmailAuth';
import DoCookSignin from './src/Screen/A2_DoCookSignin';

const Container = Styled.View`
flex: 1;
background-color: #EEE;
`;
//CreateStackNavigator
const Navigator = createStackNavigator({
  Start: { screen: Start},
  Signin: { screen: Signin},
  EmailAuth: { screen: EmailAuth},
  Main: { screen: Main},
  DoCookSignin: { screen: DoCookSignin},
},
{ headerMode: 'none'
});

const App = createAppContainer(Navigator);

export default App;
