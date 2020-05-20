import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
  { headerMode: 'none',
});

const C_Navigator = createStackNavigator(
  {
    C0_MainPage,
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    A_Navigator,
    C_Navigator,
  },
  {
    initialRouteName: 'CheckLogin',
  }
)

export default createAppContainer(AppNavigator);
