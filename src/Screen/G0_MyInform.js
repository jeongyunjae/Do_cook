import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import MyButton from '../Components/MyButton2';
import Styled from 'styled-components/native';

const ButtonContainer = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InformView = Styled.View`
  flex:3;
  align-items: center;
  justify-content: center;
`;

const G0_MyInform = ({navigation: {navigate}}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log(user.displayName);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Please Login</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <InformView>
        <Text>Your email is {user.email}</Text>
        <Text>반갑습니다 {user.displayName}님!</Text>
      </InformView>
      <ButtonContainer>
        <MyButton title="로그아웃" onPress={() => navigate('A0_StartPage')} />
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

export default G0_MyInform;
