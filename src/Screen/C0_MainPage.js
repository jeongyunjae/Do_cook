import React, {useState} from 'react';
import Styled from 'styled-components/native';
import WeColorButton from '~/Components/button/weColorButton';
import MeterialButton from '~/Components/button/for_C_Button';
import ChooseButton from '~/Components/button/chooseButton';

import {StatusBar} from 'react-native';
import CookData from '~/Components/data/CookData';
import {
  Alert,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const SelectMeterialView = Styled.View`
  margin: 17px;
  
`;

const SelectMeterialText = Styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const SelectMeterial1 = Styled.View`
  flex: 1;
  align-items: center;
  `;

const SelectMeterial2 = Styled.View`
  flex: 1;
  align-items: center;

  `;

const SelectMeterial3 = Styled.View`
  flex: 1;
  `;

const AdmitButton = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  `;

const AllMeterial = Styled.View`
  margin-left:  12px;
  margin-right: 12px;
  flex-direction: row;
  border-radius: 11px;
  border-width: 0.8px;
  elevation: 1.5;
  `;

const ScView = Styled.ScrollView`
  flex: 2.5;
`;

const SelectedMeterialArea = Styled.ScrollView`
  flex: 1.5;
`;

const AllMeterialForSelected = Styled.View`
  margin-left:  12px;
  margin-right: 12px;
  border-radius: 11px;
  border-width: 0.8px;
  `;

const SelectMeterial = Styled.View`
  align-items: center;
  `;

const SelectedMeterialView = Styled.View`
  margin: 10px;
  margin-top: 20px;
  
`;

const SelectedMeterialText = Styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const C0_MainPage = ({navigation: {navigate}}) => {
  let data = CookData;
  let mydata = [].concat.apply([], data.map(cm => cm.coreMeterial));
  let pureData = Array.from(new Set(mydata));
  const dataLength = pureData.length / 3;
  const data1 = pureData.slice(0, dataLength);
  const data2 = pureData.slice(dataLength, dataLength * 2);
  const data3 = pureData.slice(dataLength * 2, dataLength * 3);
  const [items, setItems] = useState([]);

  const addItem = f => {
    setItems([
      ...items,
      {
        value: f,
      },
    ]);
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SelectMeterialView>
        <SelectMeterialText>재료 선택</SelectMeterialText>
      </SelectMeterialView>
      <ScView>
        <AllMeterial>
          <SelectMeterial1>
            {data1.map((i, index) => {
              return (
                <MeterialButton
                  key={index}
                  title={i}
                  onPress={() => addItem(i)}
                />
              );
            })}
          </SelectMeterial1>
          <SelectMeterial2>
            {data2.map((i, index) => {
              return (
                <MeterialButton
                  key={index}
                  title={i}
                  onPress={() => addItem(i)}
                />
              );
            })}
          </SelectMeterial2>
          <SelectMeterial3>
            {data3.map((i, index) => {
              return (
                <MeterialButton
                  key={index}
                  title={i}
                  onPress={() => addItem(i)}
                />
              );
            })}
          </SelectMeterial3>
        </AllMeterial>
      </ScView>
      <SelectedMeterialView>
        <SelectedMeterialText>선택된 재료</SelectedMeterialText>
      </SelectedMeterialView>
      <SelectedMeterialArea>
        <AllMeterialForSelected>
          <SelectMeterial>
            {items.map((item, i) => {
              return <ChooseButton key={i} title={item.value} />;
            })}
          </SelectMeterial>
        </AllMeterialForSelected>
      </SelectedMeterialArea>
      <AdmitButton>
        <WeColorButton
          title="다음 단계로"
          onPress={() => {
            navigate('C1_SearchResult', items);
          }}
        />
      </AdmitButton>
    </Container>
  );
};

export default C0_MainPage;
