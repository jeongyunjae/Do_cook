import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Styled from 'styled-components/native';

import CookData from '~/Components/data/CookData';
import ShowingRecipe from '~/Components/token/showingRecipe';

import Button from '~/Components/button/for_C_Button';

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
  let meterialData = navigation.state.params;
  console.log(meterialData);
  let myData = CookData;
  const findData = [];
  meterialData.map(m => {
    findData.push(m.value);
  });
  const correctTitles = [];
  let plus = 0;
  let searchResult = '';
  for (let i = 0; i < myData.length; i++) {
    let temp = findData.filter(it => myData[i].coreMeterial.includes(it));
    if (temp.length === findData.length) {
      correctTitles.push(myData[i].title);
      searchResult = '검색결과';
    }
  }

  if (correctTitles.length == 0) searchResult = '검색된 레시피가 없습니다:)';

  meterialData.map(m => {
    m.id = ++plus;
  });

  return (
    <Container>
      <SelectMeterialView>
        <SelectMeterialText>{searchResult}</SelectMeterialText>
      </SelectMeterialView>
      <HashtagView>
        {meterialData.map(arr => {
          return <HashtagText key={arr.id}>#{arr.value}</HashtagText>;
        })}
      </HashtagView>
      <ShowRecipe>
        {correctTitles.map((i, idx) => {
          return (
            <ShowingRecipe
              title={i}
              data={findData}
              key={idx}
              onPress={() => navigation.navigate('C2_ShowDetail', i)}
            />
          );
        })}
      </ShowRecipe>
    </Container>
  );
};

export default C1_SearchResult;
