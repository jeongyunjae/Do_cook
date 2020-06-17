import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Styled from 'styled-components/native';

import CookData from '~/Components/data/CookData';
import ShowingRecipe from '~/Components/token/showingRecipe';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const SelectMeterialView = Styled.View`
  margin: 16px;
  
`;

const SelectMeterialText = Styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const HashtagView = Styled.View`
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 10px;
`;

const HashtagText = Styled.Text`
  font-weight: normal;
  font-size: 17px;
  line-height: 23px;
  color: #EC6337;
`;

const ShowRecipe = Styled.ScrollView`
`;

const C1_SearchResult = ({navigation}) => {
  const meterialData = navigation.state.params;
  console.log(meterialData);
  let myData = CookData;
  const findData = [];
  let forPrintData = [];
  meterialData.map(m => {
    findData.push(m.value);
  });

  const correctTitles = [];

  for (let i = 0; i < myData.length; i++) {
    let temp = findData.filter(it => myData[i].coreMeterial.includes(it));
    if (temp.length === findData.length) correctTitles.push(myData[i].title);
  }
  console.log(correctTitles);

  return (
    <Container>
      <SelectMeterialView>
        <SelectMeterialText>검색 결과</SelectMeterialText>
      </SelectMeterialView>
      <HashtagView>
        {meterialData.map((arr, i) => {
          return <HashtagText>#{arr.value} </HashtagText>;
        })}
      </HashtagView>
      <ShowRecipe>
        {correctTitles.map(i => {
          return <ShowingRecipe title={i} />;
        })}
      </ShowRecipe>
    </Container>
  );
};

export default C1_SearchResult;
