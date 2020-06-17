import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
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
import {getActiveChildNavigationOptions, getParams} from 'react-navigation';
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
  border-bottom-width: 1px;
  border-color: #707070;
`;
const TitleContainer = Styled.View`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 25px;
  justify-content: center;
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

const D1_ShowCookBoast = ({navigation}) => {
  const data = navigation.state.params;


  

  /*for(let i =0; data != null;i++){
      likeNum[i] = data.map(i => i.like);
  }*/

  console.log(data);
  return (
    <Container>
        <TitleText>요리자랑</TitleText>
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
            <Image source={{uri: i.imageURL}} style={{width:100,height:100}}/>
            <Text>순서 : {i.order + ' '}</Text>
            <Text>재료 : {i.ingredient + ' '}</Text>
            <Text>좋아요 : {i.like}</Text>
            <Button
            title={"like"}
            onPress={()=>{
            }}></Button>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default D1_ShowCookBoast;
