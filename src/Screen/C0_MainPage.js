import React from 'react';
import Styled from 'styled-components/native';
import MyButton from '../Components/MyButton2';

import { StatusBar } from 'react-native'; 
const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const TitleContainer = Styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;

`;

const TitleText = Styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

const ButtonContainer = Styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const C0_MainPage = ({navigation: {navigate}} ) => {
  return (
  <Container>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor={'transparent'} translucent={true}/>
    <TitleContainer>
    </TitleContainer>
      <ButtonContainer>
        <MyButton title = "로그아웃" onPress = {()=>navigate('A0_StartPage')} />
      </ButtonContainer>
  </Container>
  );
  
};

export default C0_MainPage;   