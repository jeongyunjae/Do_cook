import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  padding: 12px;
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
  margin-bottom: 10px;
  border-bottom-width: 0.5px;
  border-color: black;
`;

const MenuView = Styled.View`
margin-top: 5px;
margin-bottom: 5px;
`;

const MenuText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const SubText = Styled.Text`
  font-size: 16px;
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
            <Image
              source={{uri: i.imageURL}}
              style={{width: 400, height: 300}}
            />
            <MenuView>
              <MenuText>{i.title}</MenuText>
            </MenuView>
            <SubText>재료 : {i.ingredient + ' '}</SubText>
            <SubText>순서 : {i.order + '\n'}</SubText>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default F1_ShowMyLocker;
