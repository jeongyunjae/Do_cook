import React,{useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import MyButton from '~/Components/MyButton';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import { firebase } from '@react-native-firebase/auth';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justifyContent: center;
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
`;
const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

`;
const TitleText = Styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #EC6337;
`;

const ButtonContainer = Styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const InputTextName = Styled.Text`
  margin: 2.5px;
  color: #EC6337;
  font-weight: normal;
  font-size: 15px;
`;
const FormAndButton = Styled.View`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

const A2_DkSignUp = (props) => {
  const { navigate } = props.navigation;

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [passwordcheck,setpasswordcheck]=useState('');
  const [errorMessage,seterrorMessage]=useState(null);

  useEffect(()=>{
    var firebaseConfig = {
      apiKey: "AIzaSyDNC45-WLDMFlE43t-rcNlWNelA17AqpQg",
      authDomain: "do-cook-5e908.firebaseapp.com",
      databaseURL: "https://do-cook-5e908.firebaseio.com",
      projectId: "do-cook-5e908",
      storageBucket: "do-cook-5e908.appspot.com",
      messagingSenderId: "109877646891",
      appId: "1:109877646891:web:0926677cb5bde3b4b0fc6e",
      measurementId: "G-35V35GJY8B"
    };
    //firebase.initializeApp(firebaseConfig);     // Initialize Firebase
  });



  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate('A4_InputNickname'))
      .catch(e => seterrorMessage(e.message)); //TODO : firebase
    console.log('handleSignUp');
  };
  
  return (
  <Container>
    <TitleContainer>
      <TitleText>회원가입</TitleText>
    </TitleContainer>
      <FormAndButton>
            <FormContainer>
              <InputTextName>이메일 주소</InputTextName>
              <Input 
              style={{ marginBottom: 7}}
              onChangeText={email=>{setemail(email)}}
              value={email} />
              <InputTextName>비밀번호</InputTextName>
              <Input
                style={{ marginBottom: 15 }}
                secureTextEntry={true}
                onChangeText={password=>setpassword(password)}
                value={password}
              />
              <InputTextName>비밀번호 확인</InputTextName>
              <Input
                style={{ marginBottom: 15 }}
                secureTextEntry={true}
                onChangeText={passwordcheck=>setpasswordcheck(passwordcheck)}
                value={passwordcheck}
              />
            </FormContainer>
          </FormAndButton>
          <ButtonContainer>
            <MyButton
               title="다음 단계로"
               onPress={() => {
               if(password == passwordcheck){
                 handleSignUp();}
               else{
                 alert('패스워드와 패스워드 확인이 다릅니다.');}
            }}
            />
</ButtonContainer>
  </Container>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default A2_DkSignUp;