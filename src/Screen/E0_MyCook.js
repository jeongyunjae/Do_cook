import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/button/whiteButton';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const Container = Styled.View`
  flex: 1;
  padding: 20px;
`;

const TitleText = Styled.Text`
font-size: 20px;
font-weight: bold;
color: black;
letter-spacing: 0.5px;
`;

const Blank = Styled.View`
  flex: 2;  
`;
const FormContainer = Styled.View`
  justify-content: center;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom-width: 0.5px;
  border-color: black;
`;
const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputTextName = Styled.Text`
  margin: 2.5px;
  color: #EC6337;
  font-weight: normal;
  font-size: 15px;
`;
const FormAndButton = Styled.View`
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;  
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const E0_MyCook = () => {
  const [Title, setTitle] = useState('');

  const [Order_one, setOrder_one] = useState(''); 
  const [Order_two, setOrder_two] = useState('');
  const [Order_three, setOrder_three] = useState('');
  const [Ingredient_one, setIngredient_one] = useState('');
  const [Ingredient_two, setIngredient_two] = useState('');
  const [Order, setOrder] = useState([]);
  const [Ingredient, setIngredient]=useState([]);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [ver, setver] = useState('no');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user.emailVerified) setver('yes');
    console.log(user.displayName);
  }
  function addData(){
    const ref = firestore().collection('recipe');
    const titleRef = ref.doc(Title);
    titleRef.set({
      title: Title,
      uid: user.uid,
      userName: user.displayName,
      order: [Order_one, Order_two, Order_three],
      ingredient: [Ingredient_one, Ingredient_two],
      like: 0,
    }).then(()=>console.log('ADD!'));
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  },[]);

  if (initializing) return null;

 
  return (
    <Container>
    <TitleContainer>
      <TitleText>나만의 요리를 작성해 보세요</TitleText>
    </TitleContainer>
    <ScrollView>
    <FormContainer>
      <InputTextName>레시피명</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Title => {
          setTitle(Title);
        }}
        value={Title}
      />
      </FormContainer>
      <FormContainer>
      <InputTextName>요리순서 1</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_one => setOrder_one(Order_one)}
        value={Order_one}
      />
      <InputTextName>요리순서 2</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_two => setOrder_two(Order_two)}
        value={Order_two}
      />
      <InputTextName>요리순서 3</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_three => setOrder_three(Order_three)}
        value={Order_three}
      />
      </FormContainer>
      <FormContainer>
      <InputTextName>재료 1</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Ingredient_one => setIngredient_one(Ingredient_one)}
        value={Ingredient_one}
      />
      <InputTextName>재료 2</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Ingredient_two => setIngredient_two(Ingredient_two)}
        value={Ingredient_two}
      />
    </FormContainer>
    </ScrollView>
    <ButtonContainer>
      <Button
        style={{marginBottom: 24}}
        title="추가"
          onPress={() => {
            addData();
            alert(Title + '이 레시피에 추가되었습니다.');
            
        }}
      />
    </ButtonContainer>
  </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default E0_MyCook;
