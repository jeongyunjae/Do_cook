import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`;

const Checklogin = (props) => {
  const {navigate} = props.navigation;
  
  AsyncStorage.getItem('key').then(value => {
    if(value)
    navigate('C0_MainPage');
    else
    navigate('A0_StartPage');
  })

  //사용자 인증이 확인되면 C0요리하기 페이지로, 안되면 로그인 페이지로
  return (
  <Container>
    <ActivityIndicator size = "large" color = "E70915" />
  </Container>
  );
    
};

  export default Checklogin;