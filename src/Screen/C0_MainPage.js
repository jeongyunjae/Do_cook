import React from 'react';
import Styled from 'styled-components/native';
import MyButton from '../Components/MyButton2';
import MeterialButton from '~/Components/MyButton3';

import {StatusBar} from 'react-native';
import CookData from '~/Components/CookData';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const SelectMeterial = Styled.View`
  flex: 1;
  `;

const C0_MainPage = ({navigation: {navigate}}) => {
  const data = CookData;

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SelectMeterial>
        {data.map(i => {
          return (
            <MeterialButton
              title={i.title}
              onPress={() => {
                navigate('A5_DkLogin');
              }}
            />
          );
        })}
      </SelectMeterial>
    </Container>
  );
};

export default C0_MainPage;
