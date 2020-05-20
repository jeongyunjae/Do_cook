import React from 'react';
import {StyleSheet, View } from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const FormAndButton = Styled.View`
  flex: 1;
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
  margin: 2.5px;
  color: white;
  font-weight: normal;
  font-size: 15px;
`;

const Temp = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-bottom: 100px;
`;

const TempButton = Styled.View`
  width: 37%;
  padding-top: 48.3px;
`;

const A4_InputNickname = (props) => {
  const { navigate } = props.navigation;

  A4_InputNickname.navigationOptions = {
    title: 'Do cook',
    headerTransparent: true,
    headerTintColor: '#E70915',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
  <Container>
    <View style = {{flex:1, alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.6)'}}>
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
              navigate('C0_MainPage');
            }}
            />
        </FormAndButton>
    </View>
  </Container>
  );

};

export default A4_InputNickname;