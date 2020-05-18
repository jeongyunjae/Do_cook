import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet,View, ImageBackground, Image } from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const FormAndButton = Styled.View`
justify-content: center;
align-items: center;
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const ButtonCenter = Styled.View`
`;


const Login = (props) => {
  const { navigate } = props.navigation;
  return (
  <Container>
    <ImageBackground source={require('~/Assets/Images/Main-picture.jpg')} style = {styles.picture}>
      <View style = {{flex:1, alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <View style = {styles.AllLogo}>
          <Image source={require('~/Assets/Images/Logo.png')} style = {styles.Logo } />
        </View>
        <FormAndButton>
      <FormContainer>
      <Input style={{ marginBottom: 16 }} placeholder="이메일 주소" />
        <Input
          style={{ marginBottom: 16 }}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        </FormContainer>
        <ButtonCenter>
        <Button
          style={{ marginBottom: 24 }}
          title="로그인"
          onPress={() => {
            AsyncStorage.setItem('key', 'JYJ');
            navigate('MainPage');
          }}
        />
        <Button
          style={{ marginBottom: 24 }}
          title="회원가입"
          onPress={() => {
            navigate('Start');
          }}
        />
        </ButtonCenter>
        </FormAndButton>
</View>
</ImageBackground>
    </Container>
  );
};

Login.navigationOptions = {
  title: 'Do cook',
  headerTransparent: true,
  headerTintColor: '#E70915',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  picture: {
    height: '100%',
  },
  AllLogo: {
    paddingTop: 175,
    alignItems: 'center',
  },
  Logo: {
    width: 200,
    height: 40,
  },
});

export default Login;