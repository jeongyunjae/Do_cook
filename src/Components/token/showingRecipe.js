import React from 'react';
import Styled from 'styled-components/native';
import {View, StyleSheet, Text, Image} from 'react-native';
import CookData from '~/Components/data/CookData';
import MyImageSource from '~/Components/token/global';
import Button from '~/Components/button/goDetailRecipeBtn';
import {withNavigation} from 'react-navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Container = Styled.View`
flex: 1;
`;

const Pictures = Styled.Image`
width: 100%;
height: 100%;
`;

const InputPicture = Styled.View`
margin-left: 5px;
margin-top: 8.8px;
width: 48%;
height: 94.2%;
`;

const InnerView = Styled.View`
flex: 1;
align-items: flex-start;
margin-top: 18px;
margin-left: 10px;
`;

const InnerText = Styled.Text`
  font-size: 18px;
  font-weight: 700;
  letter-spacing : 0.3px;
`;

const HoverButton = Styled.View`
  justify-content: center;
  margin-right: 1px;
`;

const JustText = Styled.Text`
  font-size: 14px;
  font-weight: normal;
`;

const BoldText = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ec6337;

`;

const showingRecipe = ({title, data, onPress}) => {
  const myData = CookData;
  let myObj;
  for (let i = 0; i < myData.length; i++) {
    if (title == myData[i].title) {
      myObj = myData[i];
      break;
    }
  }

  let checkMeterialNum = '';

  let temp = myObj.coreMeterial.map(i => i.includes(data.map(t => t)));
  if (temp.length == data.length) {
    checkMeterialNum = 'OK';
  } else checkMeterialNum = 'No';

  return (
    <Container>
      <View style={styles.contain}>
        <InputPicture>
          <Pictures source={MyImageSource.ratings[myObj.id]} />
        </InputPicture>
        <InnerView>
          <InnerText>{myObj.title}</InnerText>
          <JustText>
            재료충족<BoldText>{checkMeterialNum}</BoldText>
          </JustText>
        </InnerView>
        <HoverButton>
          <Button title=">" onPress={onPress} />
        </HoverButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contain: {
    height: 210,
    flexDirection: 'row',
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    borderBottomColor: 'black',
  },
});

export default showingRecipe;
