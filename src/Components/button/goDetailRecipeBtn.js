import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text} from 'react-native';

const Button = Styled.TouchableOpacity`
height: 38px;
padding: 8px;
background: #ffffff;
border-color: #212121;
margin: 8px;
`;

const ButtonText = Styled.Text`
color: black;
font-size: 20px;
font-weight: 100;
text-align: center;
`;

const goDetailRecipeBtn = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default goDetailRecipeBtn;
