import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from '~/Components/MyButton2';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
`;

const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
`;

const TitleText = Styled.Text`
font-size: 34px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const Blank = Styled.View`
  flex: 2;  
`;

const ButtonContainer = Styled.View`
  flex: 1;  
  justify-content: center;
  align-items: center;
`;
const A2_DkSignUp = ({navigation: {navigate}} ) => {
  return (
  <Container>
    <TitleContainer>
      <TitleText>회원가입</TitleText>
    </TitleContainer>
    <Blank></Blank>
    <ButtonContainer>
    <Button
        style={{ marginBottom: 24 }}
        title="다음"
        onPress={() => {
        navigate('A4_InputNickname');
      }}
      />
    </ButtonContainer>
  </Container>
  );

}

export default A2_DkSignUp;