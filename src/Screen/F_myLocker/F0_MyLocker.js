import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

import Button from '~/Components/button/weColorButton';

const Container = Styled.View`
  flex: 1;
  padding: 12px;
  background-color: #ffffff;
`;

const TitleText = Styled.Text`
font-size: 26px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const ButtonContainer = Styled.View`
  margin-top: 327.5px;
  align-items: center;
`;

const F0_MyLocker = ({navigation: {navigate}}) => {
  const [user, setUser] = useState('');

  let list = [];
  let parameter = [];
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }

  function getData() {
    const ref = firestore().collection('recipe');
    ref
      .where('uid', '==', user.uid)
      .get()
      .then(snapshot =>
        snapshot.forEach(doc => {
          const {
            title,
            uid,
            userName,
            order,
            ingredient,
            imageURL,
          } = doc.data();
          list.push({
            id: doc.id,
            title,
            uid,
            userName,
            order,
            ingredient,
            imageURL,
          });
        }),
      )
      .catch(err => {
        console.log('error', err);
      });
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    //return subscriber; // unsubscribe on unmount
  });

  useEffect(() => {
    return () => setUser(null); // cleanup function을 이용
  }, []);

  return (
    <Container>
      <TitleText>나만의 레시피</TitleText>
      <ButtonContainer>
        <Button
          style={{marginBottom: 24}}
          title="레시피 보기!"
          onPress={() => {
            getData();
            setTimeout(() => {
              for (let i = 0; i < list.length; i++) {
                parameter[i] = list[i];
                console.log('parameter', i, parameter[i]);
              }
              console.log(list.length, '/', parameter.length);
              navigate('F1_ShowMyLocker', parameter);
            }, 1500);
            parameter = [];
            list = [];
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default F0_MyLocker;
