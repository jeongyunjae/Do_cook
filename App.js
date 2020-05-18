import React from 'react';
import ButtonPage from './src/Screen/MainPage';
import Styled from 'styled-components/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screens
import Start from '~/Screen/A0_Start';
import Signin from '~/Screen/A1_Signin';
import EmailAuth from '~/Screen/A3_EmailAuth';
import DoCookSignin from '~/Screen/A2_DoCookSignin';
import MainPage from '~/Screen/MainPage';
import CheckLogin from '~/Screen/CheckLogin';
import Login from '~/Screen/Login'

//CreateStackNavigator
const Navigator = createStackNavigator(
  {
    Start,
    Signin,
    EmailAuth,
    DoCookSignin,
    MainPage,
    Login,
  },
  { headerMode: 'none',
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    Navigator,
  },
  {
    initialRouteName: 'CheckLogin',
  }
)

export default createAppContainer(AppNavigator);
