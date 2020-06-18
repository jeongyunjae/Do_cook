import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Styled from 'styled-components/native';
import Button from '~/Components/button/weColorButton';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
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
  width: 300px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #707070;
`;

const D1_ShowCookBoast = ({navigation}) => {
  const data = navigation.state.params;
  const [LikeNum,setLikeNum]=useState(null);
  let myData=[];
  useEffect(()=>{
      data.map((i,idx)=>{
        (myData.push({
          title : i.title,
          like : i.like,
        }));
        
    })
  },[]);
  /*for(let i =0; data != null;i++){
      likeNum = data.map(i => i.like);
  }*/
  function onClickLike(like){
    setLikeNum(like);
    console.log(LikeNum);
  }
  const addLikeNum = () =>{
    setLikeNum([
      ...LikeNum,
      {
        title: LikeNum.title,
        like: LikeNum.like,
      }
    ]);
  }

  console.log('요리자랑');
  return (
    <Container>
      <TitleText>요리자랑</TitleText>
      <ScrollView>
        {data.map((i, idx) => (
          <FormContainer key={idx}>
            <Button
              style={{marginBottom: 24}}
              title={i.title}
              onPress={() => {
                console.log('Order > ', i.order);
                console.log('Ingrediet > ', i.ingredient);
              }}
            />
            <Image
              source={{uri: i.imageURL}}
              style={{width: 100, height: 100}}
            />
            <Text>순서 : {i.order + ' '}</Text>
            <Text>재료 : {i.ingredient + ''}</Text>
            <Text style={{fontWeight:'bold'}}>{i.userName} 님의 레시피입니다.</Text>
          </FormContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default D1_ShowCookBoast;
