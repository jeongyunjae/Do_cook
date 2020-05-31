import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
height: 38px;
padding: 8px;
margin: 7px;
background: #ffffff;
border-radius: 11px;
border-color: #212121;
border-width: 1px;
`;

const ButtonText = Styled.Text`
color: black;
font-size: 13px;
font-weight: bold;
text-align: center;
`;

const MyButton3 = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default MyButton3;
