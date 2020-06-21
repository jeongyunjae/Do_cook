import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import Styled from 'styled-components/native';

import WeColorButton from '~/Components/button/weColorButton';
import ChooseButton from '~/Components/button/chooseButton';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const InformView = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Inner = Styled.View`
  flex: 1;
`;

const G0_MyInform = ({navigation: {navigate}}) => {
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

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  console.log(user);

  if (ver == 'no') {
    return (
      <Container>
        <InformView>
          <Text style={{fontSize: 22, fontWeight: '700'}}>
            이메일 인증이 필요합니다.
          </Text>
        </InformView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ChooseButton
            title="인증하러 가기!"
            onPress={() => navigate('A7_SendEmail')}
          />
        </View>
        <ButtonContainer>
          <WeColorButton
            title="로그아웃"
            onPress={() => navigate('A0_StartPage')}
          />
        </ButtonContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <View style={{padding: 16}} />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {user.displayName}님 반가워요:)
          </Text>
        </View>
        <View
          style={{
            margin: 16,
            borderBottomWidth: 1,
            borderColor: 'gray',
            width: 368,
          }}
        />
        <Inner>
          <View />
          <View />
        </Inner>
        <ButtonContainer>
          <WeColorButton
            title="로그아웃"
            onPress={() => navigate('A0_StartPage')}
          />
        </ButtonContainer>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default G0_MyInform;
