import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import Styled from 'styled-components/native';

import Button from '~/Components/MyButton2';
import Input from '~/Components/Input';

import {firebase} from '@react-native-firebase/auth';

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

const A5_DkLogin = ({navigation: {navigate}}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errorMessage, seterrorMessage] = useState(null);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('요리하기');
        console.log(email + ' log in!');
      })
      .catch(e => {
        seterrorMessage(e.message);
        console.log(errorMessage);
        alert('로그인에 실패하였습니다.\n이메일이나 비밀번호를 확인하십시오.');
      }); //TODO : firebase
    console.log('handleLogin');
  };

  return (
    <Container>
      <ImageBackground
        source={require('~/Assets/Images/Main-picture.jpg')}
        style={styles.picture}>
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Logo>
            <Image source={require('~/Assets/Images/Logo.png')} />
          </Logo>
          <FormAndButton>
            <FormContainer>
              <InputTextName>이메일 주소</InputTextName>
              <Input
                style={{marginBottom: 7}}
                onChangeText={email => setemail(email)}
                value={email}
              />
              <InputTextName>비밀번호</InputTextName>
              <Input
                style={{marginBottom: 15}}
                secureTextEntry={true}
                onChangeText={password => setpassword(password)}
                value={password}
              />
            </FormContainer>
            <Button
              title="로그인"
              onPress={() => {
                handleLogin();
                /*AsyncStorage.setItem('key', 'JYJ');
              navigate('요리하기');*/
              }}
            />
          </FormAndButton>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default A5_DkLogin;
