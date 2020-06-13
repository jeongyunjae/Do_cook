import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/button/whiteButton';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import fb from '@react-native-firebase/app';


const Container = Styled.View`
  flex: 1;
  padding: 20px;
`;

const TitleText = Styled.Text`
font-size: 34px;
font-weight: bold;
color: #DE6139;
letter-spacing: 0.5px;
`;

const Blank = Styled.View`
  flex: 2;  
`;
const FormContainer = Styled.View`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 20px;
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
`;

const F0_MyLocker = ({navigation: {navigate}}) => {
  const ref = firestore().collection("recipe");
  //const ref = database().refFromURL('https://do-cook-5e908.firebaseio.com/');

  const [Title, setTitle] = useState('');
  const [Order_one, setOrder_one] = useState(''); 
  const [Order_two, setOrder_two] = useState('');
  const [Order_three, setOrder_three] = useState('');
  const [Ingredient_one, setIngredient_one] = useState('');
  const [Ingredient_two, setIngredient_two] = useState('');

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
  /*function addRecipe(){
    database().ref('/').set({
        name: 'JEONG',
        age: 24,
        uID: user.uid,
      })
      .then(() => console.log('Data set.'));
  }*/
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

 
  return (
    <Container>
    <TitleContainer>
      <TitleText>데이터베이스 테스트</TitleText>
    </TitleContainer>
    <FormContainer>
      <InputTextName>레시피명</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Title => {
          setTitle(Title);
        }}
        value={Title}
      />
            <InputTextName>요리순서 1</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_one => setOrder_one(Order_one)}
        value={Order_one}
      />
      <InputTextName>요리순서 2</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_two => setOrder_two(Order_one)}
        value={Order_two}
      />
      <InputTextName>요리순서 3</InputTextName>
      <Input
        style={{marginBottom: 5}}
        onChangeText={Order_three => setOrder_three(Order_one)}
        value={Order_three}
      />
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
    <ButtonContainer>
      <Button
        style={{marginBottom: 24}}
        title="추가"
          onPress={() => {
            console.log(
              '레시피명:',
              Title,
              '/순서1:',
              Order_one,
              '/순서2:',
              Order_two,
              '/순서3:',
              Order_three,
              '/재료1:',
              Ingredient_one,
              '/재료2:',
              Ingredient_two,
              '/uID:',
              user.uid,
            );
            ref.add({
              userName: user.displayName,
              title: Title,
            }).then(()=>console.log('Add!'));
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

export default F0_MyLocker;
