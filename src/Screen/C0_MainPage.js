import React from 'react';
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

const ButtonContainer = Styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const C0_MainPage = (props) => {
  const { navigate } = props.navigation;

  return (
  <Container>
    <TitleContainer>
      <TitleText>C0_MainPage</TitleText>
    </TitleContainer>
      <ButtonContainer>
        <MyButton title = "로그아웃" onPress = {()=>navigate('A0_StartPage')} />
      </ButtonContainer>
  </Container>
  );
  
};

export default C0_MainPage;   