import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
width: 100px;
height: 38px;
padding: 8px;
margin-bottom: 15px;
background: #ffffff;
border-radius: 11px;
border-color: #212121;
border-width: 1px;
margin: 10px;
`;

const ButtonText = Styled.Text`
color: black;
font-size: 13px;
font-weight: normal;
text-align: center;
`;

const for_C_Button = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default for_C_Button;
