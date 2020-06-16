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
  justify-content: center;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: black;
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
  justify-content: center;
  align-items: center;
`;

const F1_ShowMyLocker = ({navigation}) => {
  const data = navigation.state.params;
  console.log(data);
  return (
    <Container>
      <TitleText>나만의 레시피</TitleText>
      <ScrollView>
        {data.map(i => (
          <FormContainer>
            <Button
              style={{marginBottom: 24}}
              title={i.title}
              onPress={() => {
                console.log('Order > ', i.order);
                console.log('Ingrediet > ', i.ingredient);
              }}
            />
            <Text>순서 : {i.order + '\n'}</Text>
            <Text>재료 : {i.ingredient + ' '}</Text>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default F1_ShowMyLocker;
