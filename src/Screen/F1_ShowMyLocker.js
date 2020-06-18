import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Styled from 'styled-components/native';
import Button from '~/Components/button/weColorButton';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const ScrollView = Styled.ScrollView`
  margin-top: 20px;
`;

const TitleText = Styled.Text`
font-size: 26px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const FormContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-bottom-width: 0.5px;
  border-color: black;
`;

const F1_ShowMyLocker = ({navigation}) => {
  const data = navigation.state.params;
  console.log(data);
  return (
    <Container>
      <TitleText>나만의 레시피</TitleText>
      <ScrollView>
        {data.map((i, idx) => (
          <FormContainer key={idx}>
            <Button
              style={{marginBottom: 24}}
              title={i.title}
              onPress={() => {
                console.log('Order > ', i.order);
                console.log('Ingrediet > ', i.ingredient);
                console.log('ImageURL > ', i.imageURL);
              }}
            />
            <Image
              source={{uri: i.imageURL}}
              style={{width: 100, height: 100}}
            />
            <Text>순서 : {i.order + '\n'}</Text>
            <Text>재료 : {i.ingredient + ' '}</Text>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default F1_ShowMyLocker;
