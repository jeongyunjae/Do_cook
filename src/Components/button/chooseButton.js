import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
width: 150px;
height: 38px;
padding: 8px;
background: #808080;
border-radius: 11px;
border-color: #212121;
border-width: 1px;
margin: 8px;
`;

const ButtonText = Styled.Text`
color: white;
font-size: 12px;
font-weight: normal;
text-align: center;
`;

const chooseButton = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default chooseButton;
