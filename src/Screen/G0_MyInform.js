import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import WeColorButton from '~/Components/button/weColorButton';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;`;

const ButtonContainer = Styled.View`
  flex: 2;
  align-items: center;
`;

const InformView = Styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const EmailView = Styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const EmailText = Styled.Text`
  font-size: 20px;
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
      <View style={styles.container}>
        <InformView>
          <Text>이메일 인증하세요.</Text>
        </InformView>
        <ButtonContainer>
          <WeColorButton
            title="로그아웃"
            onPress={() => navigate('A0_StartPage')}
          />
        </ButtonContainer>
      </View>
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
          <View>
            <Text style={{padding: 16, fontSize: 16, color: 'black'}}>
              정보수정
            </Text>
          </View>
          <View>
            <Text style={{padding: 16, fontSize: 16, color: 'black'}}>
              튜토리얼
            </Text>
          </View>
        </Inner>
        <EmailView>
          <EmailText>Your email is {user.email}</EmailText>
          <EmailText>email 인증 : {ver}</EmailText>
        </EmailView>
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
