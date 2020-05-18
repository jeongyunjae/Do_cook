import React from 'react';
import ButtonPage from './src/Screen/ButtonPage';
import Styled from 'styled-components/native';
import {
  StatusBar,
  View,
} from 'react-native'

const Container = Styled.View`
flex: 1;
background-color: #EEE;
`;

const App = () => {
  return (
    <>
    <StatusBar barStyle="black-content" />
      <Container>
        <ButtonPage />
      </Container>
      </>
  );
};

export default App;
