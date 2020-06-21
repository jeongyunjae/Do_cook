import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Styled from 'styled-components/native';

import MyImageSource from '~/Components/token/global';
import CookData from '~/Components/data/CookData';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const RecipeInform = Styled.ScrollView`
  flex: 5;
  margin-left: 16px;
  margin-right: 16px;
`;

const Pictures = Styled.Image`
width: 100%;
height: 100%;
`;

const InputPicture = Styled.View`
flex: 7;
`;

const TitleView = Styled.View`
  align-items: flex-start;
  margin: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TitleText = Styled.Text`
  font-size: 26px;
  font-weight: bold;
`;

const CoreMeterialView = Styled.View`
  margin-bottom: 5px;
`;

const CoreMeterialText = Styled.Text`
  font-size: 13px;
  font-weight: normal;
`;

const AroundView = Styled.View`
  margin-bottom: 10px;
`;

const C2_ShowDetail = ({navigation}) => {
  let findData = navigation.state.params;
  const myCookData = CookData;
  let temp = [];
  for (let i = 0; i < myCookData.length; i++) {
    if (findData == myCookData[i].title) temp = myCookData[i];
  }

  return (
    <Container>
      <InputPicture>
        <Pictures source={MyImageSource.ratings[temp.id]} />
      </InputPicture>
      <TitleView>
        <TitleText>{temp.title}</TitleText>
      </TitleView>
      <RecipeInform>
        <AroundView>
          <View style={{marginBottom: 5, marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>필수 재료</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            {temp.coreMeterial.map((i, idx) => {
              return (
                <CoreMeterialView key={idx}>
                  <CoreMeterialText>{i} </CoreMeterialText>
                </CoreMeterialView>
              );
            })}
          </View>
        </AroundView>
        <AroundView>
          <View style={{marginBottom: 5, marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>1인분 기준</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            {temp.quantity.map((i, idx) => {
              return (
                <CoreMeterialView key={idx}>
                  <CoreMeterialText>{i} </CoreMeterialText>
                </CoreMeterialView>
              );
            })}
          </View>
        </AroundView>
        <AroundView>
          <View style={{marginBottom: 5, marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>요리과정</Text>
          </View>
          <View style={{flex: 1}}>
            <CoreMeterialText>{temp.recipe}</CoreMeterialText>
          </View>
        </AroundView>
      </RecipeInform>
    </Container>
  );
};

export default C2_ShowDetail;
