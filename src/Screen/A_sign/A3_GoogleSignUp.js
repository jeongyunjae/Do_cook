import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Button from '~/Components/button/whiteButton';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
`;

const A3_GoogleSignUp = ({navigation: {navigate}}) => {
  return (
    <Container>
      <Text>구글 회원가입 페이지</Text>
      <Button
        style={{marginBottom: 24}}
        title="다음 단계로"
        onPress={() => {
          navigate('요리하기');
        }}
      />
    </Container>
  );
};

export default A3_GoogleSignUp;
