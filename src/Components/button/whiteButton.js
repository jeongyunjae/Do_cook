import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
width: 40%;
height: 40px;
padding: 8px;
margin: 5px;
background: rgba(238, 238, 238, 0.8);
border-radius: 11px;
border-width: 0.5px;
border-color: #000000;
`;

const ButtonText = Styled.Text`
color: black;
font-size: 15px;
font-weight: bold;
text-align: center;
`;

const MyButton = ({title, onPress, key}) => {
  return (
    <Button activeOpacity={0.8} key={key} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default MyButton;
