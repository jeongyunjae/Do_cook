import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';
import {firebase} from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Button} from 'react-native';
import WeColorButton from '~/Components/button/weColorButton';

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = Styled.View`
  flex: 1;
`;

const InformView = Styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`;

const Checklogin = ({navigation: {navigate}}) => {
  /* AsyncStorage.getItem('key').then(value => {
    if (value) navigate('MainTabs');
    else navigate('A0_StartPage');
  });*/
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [ver, setver] = useState('no');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user.emailVerified) setver('yes');
    console.log(user.displayName);
  }

  function handleSendEmail() {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(function() {
        alert('이메일을 확인하세요.');
        console.log('인증이메일 발송');
      })
      .catch(function(error) {
        alert('이메일 발송 에러', error);
        console.log('인증이메일 발송 에러', error);
      });
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  console.log(user);

  //사용자 인증이 확인되면 C0요리하기 페이지로, 안되면 로그인 페이지로
  return (
    <View style={styles.container}>
      <InformView>
        <Text>이메일 인증하세요.</Text>
      </InformView>
      <ButtonContainer>
        <WeColorButton
          title="이메일 보내기"
          onPress={() => handleSendEmail()}
        />
        <WeColorButton
          title="next"
          onPress={() => navigate('A4_InputNickname')}
        />
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Checklogin;
