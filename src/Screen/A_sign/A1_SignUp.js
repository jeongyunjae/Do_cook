import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import Styled from 'styled-components/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {firebase} from '@react-native-firebase/auth';

import Button from '~/Components/button/LoginButton';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const Logo = Styled.View`
  flex: 10;
  justify-content: center;
  align-items: center;
`;

const ButtonLocate = Styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  picture: {
    height: '100%',
  },
});

const A1_SignUp = ({navigation: {navigate}}) => {
  let {userInfo, setuserInfo} = useState(null);

  const {gettingLoginStatus, setgettingLoginStatus} = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '109877646891-jtgsjr70h56lnhcgki3ampro788pf6nh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
    //    _isSignedIn();
  }, []);

  /*const _isSignedIn = async()=>{
  const isSignedIn = await GoogleSignin.isSignedIn();
  if(isSignedIn){
    alert('User is already signed in');
    _getCurrentUserInfo();
  } else {
    alert('Please Login');
  }
  setgettingLoginStatus(false);
};

const _getCurrentUserInfo = async () => {
  try{
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      setuserInfo(userInfo);
  } catch(error){
      if(error.code === statusCodes.SIGN_IN_REQUIRED) {
          alert('User has not signed in yet');
          console.log('User has not signed in yet');
      } else {
          alert("Something went wrong. Unable to get user's info");
          console.log("Something went wrong. Unable to get user's info");
      }
  }
};*/

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      //await GoogleSignin.configure();
      userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      const credential = firebase.auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      await firebase.auth().signInWithCredential(credential);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow'); // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In'); // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated'); // play services not available or outdated
      } else {
        console.log('Some Other Error Happened'); // some other error happened
      }
      return false;
    }
  };

  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setuserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  //if(userInfo !=null){}
  //else{
  return (
    <Container>
      <ImageBackground
        source={require('~/Assets/Images/Main-picture.jpg')}
        style={styles.picture}>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Logo>
            <Image source={require('~/Assets/Images/Logo.png')} />
          </Logo>
          <ButtonLocate>
            <Button
              style={{marginBottom: 24}}
              title="자체 회원가입"
              onPress={() => {
                navigate('A2_DkSignUp');
              }}
            />
            <Button
              style={{marginBottom: 24}}
              title="구글 회원가입"
              onPress={() => {
                _signIn().then(() => navigate('A4_InputNickname'));
              }}
            />
          </ButtonLocate>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default A1_SignUp;
