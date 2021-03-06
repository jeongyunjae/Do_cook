import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Styled from 'styled-components/native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Container = Styled.View`
  flex: 1;
  padding: 12px;
  background-color: #ffffff;
`;

const TitleView = Styled.View`
margin-bottom: 10px;
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
  padding-bottom: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #707070;
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
  font-size: 15px;
`;

const UserText = Styled.Text`
  color: #ec6337;
`;

const D1_ShowCookBoast = ({navigation}) => {
  const data = navigation.state.params;
  const [LikeNum, setLikeNum] = useState(null);
  let myData = [];
  useEffect(() => {
    data.map((i, idx) => {
      myData.push({
        title: i.title,
        like: i.like,
      });
    });
  }, []);
  /*for(let i =0; data != null;i++){
      likeNum = data.map(i => i.like);
  }*/
  function onClickLike(like) {
    setLikeNum(like);
    console.log(LikeNum);
  }
  const addLikeNum = () => {
    setLikeNum([
      ...LikeNum,
      {
        title: LikeNum.title,
        like: LikeNum.like,
      },
    ]);
  };

  return (
    <Container>
      <TitleView>
        <TitleText>요리자랑</TitleText>
      </TitleView>
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
            <View style={{marginBottom: 5}}>
              <SubText>순서: {i.order + ' '}</SubText>
              <SubText>재료: {i.ingredient + ''}</SubText>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              <UserText>{i.userName}</UserText>님의 레시피입니다 :)
            </Text>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default D1_ShowCookBoast;
