import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  NativeModules,
} from 'react-native';
import Styled from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {getActiveChildNavigationOptions} from 'react-navigation';

import Button from '~/Components/button/weColorButton';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const TitleText = Styled.Text`
font-size: 26px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const Blank = Styled.View`
  flex: 2;  
`;
const FormContainer = Styled.View`
  flex: 1;
`;
const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputTextName = Styled.Text`
  margin: 2.5px;
  color: #EC6337;
  font-weight: normal;
  font-size: 15px;
`;
const FormAndButton = Styled.View`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;  
  margin-top: 300px;
  align-items: center;
`;

const F0_MyLocker = ({navigation: {navigate}}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('');

  const [Datas, setDatas] = useState([]);

  let list = [];
  let parameter = [];
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    //if (initializing) setInitializing(false);
    //console.log(user.displayName);

    //setDatas(...Datas, {});
  }

  function getData() {
    const ref = firestore().collection('recipe');
    ref
      .where('uid', '==', user.uid)
      .get()
      .then(snapshot =>
        snapshot.forEach(doc => {
          const {title, uid, userName, order, ingredient} = doc.data();
          list.push({
            id: doc.id,
            title,
            uid,
            userName,
            order,
            ingredient,
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

  // if (initializing) return null;

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
