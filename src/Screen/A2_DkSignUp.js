import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justifyContent: center;
`;

const A2_DkSignUp = (props) => {
  const { navigate } = props.navigation;
  
  return (
  <Container>
    <Text>자체 회원가입 페이지</Text>
      <Button
        style={{ marginBottom: 24 }}
        title="다음 단계로"
        onPress={() => {
        navigate('A4_InputNickname');
      }}
      />
  </Container>
  );

}

export default A2_DkSignUp;