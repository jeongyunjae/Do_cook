import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {
  StyleSheet,
  Image
} from 'react-native';

//Screens
import CheckLogin from '~/Screen/CheckLogin';
import A0_StartPage from '~/Screen/A0_StartPage';
import A1_SignUp from '~/Screen/A1_SignUp';
import A2_DkSignUp from '~/Screen/A2_DkSignUp';
import A3_GoogleSignUp from '~/Screen/A3_GoogleSignUp';
import A4_InputNickname from '~/Screen/A4_InputNickname';
import A5_DkLogin from '~/Screen/A5_DkLogin';
import A6_GoogleLogin from '~/Screen/A6_GoogleLogin';
import C0_MainPage from '~/Screen/C0_MainPage';
import D0_CookBoast from '~/Screen/D0_CookBoast';
import E0_MyCook from '~/Screen/E0_MyCook';
import F0_MyLocker from '~/Screen/F0_MyLocker';
import G0_MyInform from '~/Screen/G0_MyInform';

const icons = {
  first: require('~/Assets/Images/1.png'),
  second: require('~/Assets/Images/2.png'),
  third: require('~/Assets/Images/3.png'),
  four: require('~/Assets/Images/4.png'),
  five: require('~/Assets/Images/5.png'),
}

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
  },
  { 
    headerMode: 'none',
  }
);

const C_Navigator = createStackNavigator(
  {
    C0_MainPage,
  },
  {
    headerMode: 'screen',
  }
);

const D_Navigator = createStackNavigator(
  {
    D0_CookBoast,
  },
  {
    headerMode: 'screen',
  }
);

const E_Navigator = createStackNavigator(
  {
    E0_MyCook,
  },
  {
    headerMode: 'screen',
  }
);

const F_Navigator = createStackNavigator(
  {
    F0_MyLocker,
  },
  {
    headerMode: 'screen',
  }
);

const G_Navigator = createStackNavigator(
  {
    G0_MyInform,
  },
  {
    headerMode: 'screen',
  } 
);

const MainTabs = createBottomTabNavigator(
  {

    요리하기: {
      screen: C_Navigator,
    },

    요리자랑: {
      screen: D_Navigator,
    },

    나만의요리: {
      screen: E_Navigator,
    },

    보관함: {
      screen: F_Navigator,
    },

    내정보: {
      screen: G_Navigator,
    },
  },
  
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let icon;
        if (routeName === 'C_Navigator')
        icon = focused ? icons.first : icons.five;
        else if (routeName === 'D_Navigator')
        icon = focused ? icons.second : icons.five; 
        else if (routeName === 'E_Navigator') 
        icon = focused ? icons.third : icons.five;
        else if (routeName === 'F_Navigator') 
        icon = focused ? icons.four : icons.five;
        else if (routeName === 'G_Navigator') 
        icon = focused ? icons.five : icons.five;

        return <Image source={icon} style={{width: 20, height: 20}} />
      }
    }),
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      },
    });

  const AppNavigator = createSwitchNavigator(
    {
      CheckLogin,
      A_Navigator,
      MainTabs,
    },
    {
      initialRouteName: 'CheckLogin',
    })

    const styles = StyleSheet.create({
    });

export default createAppContainer(AppNavigator);
