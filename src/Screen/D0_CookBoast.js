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
import Input from '~/Components/Input';
import Button from '~/Components/button/weColorButton';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {getActiveChildNavigationOptions} from 'react-navigation';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const Blank = Styled.View`
  flex: 2;  
`;
const FormContainer = Styled.View`
  flex: 1;
`;

const TitleText = Styled.Text`
font-size: 26px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const TitleContainer = Styled.View`
  flex: 1;
  align-items: flex-start;
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
  justify-content: center;
  align-items: center;
`;

const D0_CookBoast = ({navigation: {navigate}}) => {
  let list = [];

  function getData() {
    const ref = firestore().collection('recipe');
    ref
      .orderBy('like', 'desc')
      .get()
      .then(snapshot =>
        snapshot.forEach(doc => {
          const {title, uid, userName, order, ingredient, like, imageURL} = doc.data();
          list.push({
            id: doc.id,
            title,
            uid,
            userName,
            order,
            ingredient,
            like,
            imageURL,
          });
        }),
      )
      .catch(err => {
        console.log('error', err);
      });
  }
  useEffect(() => {
    setTimeout(() => {
      console.log(list);
    }, 1500);
  },);

  return (
    <Container>
      <TitleContainer>
        <TitleText>요리자랑</TitleText>
      </TitleContainer>
      <ButtonContainer>
        <Button
          title="모두의 레시피 보기"
          onPress={() => {
            getData();
            setTimeout(() => {
              navigate('D1_ShowCookBoast', list);
            }, 1500);
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

export default D0_CookBoast;
