import React from 'react';
import ButtonPage from './Screen/ButtonPage';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex: 1;
`;

const App = () => {
  return (
    <Container>
      <ButtonPage />
    </Container>
  );
};

export default App;
