import React , { useState } from 'react';
import Styled from 'styled-components/native';
import MyButton from '../Components/MyButton';

const Container = Styled.SafeAreaView`
flex: 1;
`;

const TitleContainer = Styled.View`
flex: 1;
justify-content: center;
align-items: center;
/*background-color: rgba(0,0,0,0.6); 투명도 포함 색정하기 */

`;

const TitleText = Styled.Text`
font-size: 32px;
font-weight: bold;
color: black;
`;

const Result = Styled.View`
flex: 2;
justify-content: center;
align-items: center;
`;

const ResultText = Styled.Text`
font-weight: bold;
font-size: 32px;
`;

const ButtonContainer = Styled.View`
flex: 2;
flex-direction: row; /* 아이템 정렬을 수평으로 */
justify-content: space-around; /* 얘랑 밑에 애랑 항상 쌍으로 해야 원하는 위치 중앙 */
align-items: center;
`;

const ButtonPage = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count -1);
    return (
    <Container>
        <TitleContainer>
            <TitleText>계산기</TitleText>
        </TitleContainer>
        <Result>
            <ResultText>{count}</ResultText>
        </Result>
        <ButtonContainer>
        <MyButton title = "-" onPress = {decrease} />
        <MyButton title = "+" onPress = {increase} />
        </ButtonContainer>
    </Container>
    );
};

export default ButtonPage;      