import React from 'react';
import {StyleSheet, View, Image, ImageBackground, StatusBar} from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const Logo = Styled.View`
  flex: 10;
  justify-content: center;
  align-items: center;
`;

const ButtonLocate = Styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  picture: {
    height: '100%',
  },
});

const A0_StartPage = ({navigation: {navigate}} ) => {
  return (
  <Container>
    <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
    <ImageBackground source={require('~/Assets/Images/Main-picture.jpg')} style = {styles.picture}>
      <View style = {{flex:1, alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <Logo>
          <Image source={require('~/Assets/Images/Logo.png')} />
        </Logo>
          <ButtonLocate>
            <Button
              style={{ marginBottom: 24 }}
              title="Login for E-mail"
              onPress={() => {
              navigate('A5_DkLogin');
            }}
            />

            <Button
              style={{ marginBottom: 24 }}
              title="Login for Google"
              onPress={() => {
              navigate('A6_GoogleLogin');
            }}
            />

            <Button
              style={{ marginBottom: 24 }}
              title="회원가입"
              onPress={() => {
              navigate('A1_SignUp');
              }}
            />
          </ButtonLocate>
      </View>
    </ImageBackground>
  </Container>
  );

};



export default A0_StartPage;