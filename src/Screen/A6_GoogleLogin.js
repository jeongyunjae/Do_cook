import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justifyContent: center;
`;

const A6_GoogleLogin = (props) => {
  const { navigate } = props.navigation;
  return (
  <Container>
    <Text>구글 로그인 페이지</Text>
  </Container>
  );
  
};

export default A6_GoogleLogin;