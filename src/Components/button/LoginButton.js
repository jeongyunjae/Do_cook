import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
width: 52%;
height: 42px;
padding: 10px;
margin: 7px;
border-radius: 15px;
background-color: white;
border-width: 0.8px;
border-color: #212121;
`;

const ButtonText = Styled.Text`
color: brown;
font-size: 14px;
font-weight: bold;
text-align: center;
`;

const LoginButton = ({title, onPress}) => {
  return (
    <Button activeOpacity={0.8} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default LoginButton;
