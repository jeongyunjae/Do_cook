import React from 'react';
import {StyleSheet, View } from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton2';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 2;
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

const FormAndButton = Styled.View`
  flex: 3;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 87px;
`;

const InputTextName = Styled.Text`
  margin-bottom: 2.5px;
  color: #DE6139;
  font-weight: normal;
  font-size: 14px;
`;

const Temp = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-bottom: 100px;
`;

const TempButton = Styled.View`
  width: 37%;
  padding-top: 44.5px;
`;

const A4_InputNickname = ({navigation: {navigate}} ) => {

  return (
      <Container>
      <TitleContainer>
        <TitleText>회원가입</TitleText>
      </TitleContainer>
      <FormAndButton>
        <Temp>
          <FormContainer>
            <InputTextName>사용할 닉네임</InputTextName>
            <Input style={{ marginBottom: 7 }} />
          </FormContainer>
          <TempButton>
            <Button
              title="확인"
              onPress={() => {
              alert("사용가능한 닉네임입니다.");
            }}
            />
            </TempButton>
            </Temp>
            <Button
              title="시작하기"
              onPress={() => {
              navigate('요리하기');
            }}
            />
        </FormAndButton>
        </Container>
  );

};

export default A4_InputNickname;