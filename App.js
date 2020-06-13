import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {StyleSheet, Image} from 'react-native';

//Screens
import CheckLogin from '~/Screen/CheckLogin';
import A0_StartPage from '~/Screen/A0_StartPage';
import A1_SignUp from '~/Screen/A1_SignUp';
import A2_DkSignUp from '~/Screen/A2_DkSignUp';
import A3_GoogleSignUp from '~/Screen/A3_GoogleSignUp';
import A4_InputNickname from '~/Screen/A4_InputNickname';
import A5_DkLogin from '~/Screen/A5_DkLogin';
import A6_GoogleLogin from '~/Screen/A6_GoogleLogin';
import A7_SendEmail from '~/Screen/A7_SendEmail';
import C0_MainPage from '~/Screen/C0_MainPage';
import C1_SearchResult from '~/Screen/C1_SearchResult';
import D0_CookBoast from '~/Screen/D0_CookBoast';
import E0_MyCook from '~/Screen/E0_MyCook';
import F0_MyLocker from '~/Screen/F0_MyLocker';
import G0_MyInform from '~/Screen/G0_MyInform';

//CreateStackNavigator
const A_Navigator = createStackNavigator(
  {
    A0_StartPage,
    A1_SignUp,
    A2_DkSignUp,
    A3_GoogleSignUp,
    A4_InputNickname,
    A5_DkLogin,
    A6_GoogleLogin,
    A7_SendEmail,
  },
  {
    headerMode: 'none',
  },
);

const C_Navigator = createStackNavigator(
  {
    요리하기: {screen: C0_MainPage},
    C1_SearchResult,
  },
  {
    defaultNavigationOptions: {
      title: '요리하기',
      headerStyle: {
        backgroundColor: '#EC6337',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 21,
      },
    },
  },
);

const D_Navigator = createStackNavigator(
  {
    요리자랑: {screen: D0_CookBoast},
  },
  {
    defaultNavigationOptions: {
      title: '요리 자랑',
      headerStyle: {
        backgroundColor: '#EC6337',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 21,
      },
    },
  },
);

const E_Navigator = createStackNavigator(
  {
    나만의요리: {screen: E0_MyCook},
  },
  {
    defaultNavigationOptions: {
      title: '나만의 요리',
      headerStyle: {
        backgroundColor: '#EC6337',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 21,
      },
    },
  },
);

const F_Navigator = createStackNavigator(
  {
    보관함: {screen: F0_MyLocker},
  },
  {
    defaultNavigationOptions: {
      title: '보관함',
      headerStyle: {
        backgroundColor: '#EC6337',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 21,
      },
    },
  },
);

const G_Navigator = createStackNavigator(
  {
    내정보: {screen: G0_MyInform},
  },
  {
    defaultNavigationOptions: {
      title: '내 정보',
      headerStyle: {
        backgroundColor: '#EC6337',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 21,
      },
    },
  },
);

const MainTabs = createBottomTabNavigator(
  {
    요리하기: C_Navigator,
    요리자랑: D_Navigator,
    나만의요리: E_Navigator,
    보관함: F_Navigator,
    내정보: G_Navigator,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: focused => {
        const {routeName} = navigation.state;
        let iconName = '';
        if (routeName === '요리하기') {
          iconName = focused
            ? require('~/Assets/Images/1.png')
            : require('~/Assets/Images/3.png');
        } else if (routeName === '요리자랑') {
          iconName = focused
            ? require('~/Assets/Images/2.png')
            : require('~/Assets/Images/2.png');
        } else if (routeName === '나만의요리') {
          iconName = focused
            ? require('~/Assets/Images/3.png')
            : require('~/Assets/Images/2.png');
        } else if (routeName === '보관함') {
          iconName = focused
            ? require('~/Assets/Images/4.png')
            : require('~/Assets/Images/2.png');
        } else if (routeName === '내정보') {
          iconName = focused
            ? require('~/Assets/Images/5.png')
            : require('~/Assets/Images/2.png');
        }
        return <Image source={iconName} style={{width: 20, height: 20}} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    A_Navigator,
    MainTabs,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

const styles = StyleSheet.create({});

export default createAppContainer(AppNavigator);
