import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

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

const A1_SignUp = (props) => {
  const { navigate } = props.navigation;
  return (
  <Container>
    <ImageBackground source={require('~/Assets/Images/Main-picture.jpg')} style = {styles.picture}>
      <View style = {{flex:1, alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.6)'}}>
        <Logo>
          <Image source={require('~/Assets/Images/Logo.png')} />
        </Logo>
        <ButtonLocate>
          <Button
            style={{ marginBottom: 24 }}
            title="자체 회원가입"
            onPress={() => {
            navigate('A2_DkSignUp');
          }}
          />
          <Button
            style={{ marginBottom: 24 }}
            title="구글 회원가입"
            onPress={() => {
            navigate('A3_GoogleSignUp');
          }}
          />
        </ButtonLocate>
      </View>
    </ImageBackground>
  </Container>
  );

};

export default A1_SignUp;