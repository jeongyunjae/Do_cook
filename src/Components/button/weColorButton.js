import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
width: 40%;
height: 38px;
padding: 8px;
margin: 7px;
background: #EC6139;
border-radius: 15px;
border-color: #000000;
`;

const ButtonText = Styled.Text`
color: white;
font-size: 13px;
font-weight: bold;
text-align: center;
`;

const weColorButton = ({title, onPress}) => {
  return (
    <Button activeOpacity={0.8} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default weColorButton;
