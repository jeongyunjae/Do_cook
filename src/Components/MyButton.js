import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text } from 'react-native';


const Button = Styled.TouchableOpacity`
width: 40%;
height: 40px;
padding: 8px;
margin: 7px;
background: rgba(238, 238, 238, 0.9);
border-radius: 8px;
border-width: 0.5px;
border-color: #000000;
`;

const ButtonText = Styled.Text`
color: black;
font-size: 16px;
font-weight: bold;
text-align: center;
`;

const MyButton = ({title, onPress}) => {
    return (
        <Button onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </Button>
    );
}

export default MyButton;