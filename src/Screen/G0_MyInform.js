import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import WeColorButton from '~/Components/button/weColorButton';
import Styled from 'styled-components/native';

const ButtonContainer = Styled.View`
  flex: 1;
`;

const InformView = Styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
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
      <View style={styles.container}>
        <InformView>
        <Text>이메일 인증하세요.</Text>
        </InformView>
        <ButtonContainer>
          <WeColorButton
            title="로그아웃"
            onPress={()=> navigate('A0_StartPage')}
          />
        </ButtonContainer>
      </View>
    );
  } else {
  return (
    <View style={styles.container}>
      <InformView>
        <Text>반갑습니다 {user.displayName}님!</Text>
        <Text>Your email is {user.email}</Text>
        <Text>email 인증 : {ver}</Text>
      </InformView>
      <ButtonContainer>
        <WeColorButton
          title="로그아웃"
          onPress={() => navigate('A0_StartPage')}
        />
      </ButtonContainer>
    </View>
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
