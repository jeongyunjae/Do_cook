import React from 'react';
import Styled from 'styled-components/native';

const Button = Styled.TouchableOpacity`
border-radius: 8px; /* 버튼의 모서리 둥글기 */
padding: 5px;
width: 100px;
margin: 5px;
background-color: #de6139;
`;

const ButtonText = Styled.Text`
color: white;
font-weight: bold;
font-size: 20px;
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