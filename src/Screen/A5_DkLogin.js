import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet,View,ImageBackground, Image } from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton2';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const Logo = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormAndButton = Styled.View`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const InputTextName = Styled.Text`
  margin: 2.5px;
  color: white;
  font-weight: normal;
  font-size: 15px;
`;

const styles = StyleSheet.create({
  picture: {
    height: '100%',
  },
});

const A5_DkLogin = ({navigation: {navigate}} ) => {
  
  return (
  <Container>
    <ImageBackground source={require('~/Assets/Images/Main-picture.jpg')} style = {styles.picture}>
      <View style = {{flex:1, alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <Logo>
          <Image source={require('~/Assets/Images/Logo.png')} />
        </Logo>
          <FormAndButton>
            <FormContainer>
              <InputTextName>이메일 주소</InputTextName>
              <Input style={{ marginBottom: 7 }} />
              <InputTextName>비밀번호</InputTextName>
              <Input
                style={{ marginBottom: 15 }}
                secureTextEntry={true}
              />
            </FormContainer>
            <Button
              title="로그인"
              onPress={() => {
              AsyncStorage.setItem('key', 'JYJ');
              navigate('요리하기');
            }}
            />
          </FormAndButton>
      </View>
    </ImageBackground>
  </Container>
  );

};

export default A5_DkLogin;