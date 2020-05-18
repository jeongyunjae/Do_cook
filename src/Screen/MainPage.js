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
background-color: rgba(0,0,0,0.6); /* 투명도 포함 색정하기 */

`;

const TitleText = Styled.Text`
font-size: 32px;
font-weight: bold;
color: white;
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
flex-direction: column; /* 아이템 정렬을 수평으로 */
align-items: center;
`;

const MainPage = (props) => {
    const {navigate} = props.navigation;
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
        <MyButton title = "로그아웃" onPress = {()=>navigate('Login')} />
        </ButtonContainer>
    </Container>
    );
};

export default MainPage;   