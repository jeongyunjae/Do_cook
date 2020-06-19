import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import Styled from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
//import { downloadingURL, imagePickerOptions, createStorageReferenceToFile, uploadFileToFireBase } from '~/utils';

import Input from '~/Components/Input';
import Button from '~/Components/button/weColorButton';
import ImgAddButton from '~/Components/button/for_C_Button';

const FireBaseStorage = storage();

const ScrollView = Styled.ScrollView`
flex: 6;
`;

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Picture = Styled.Image.attrs({
  resizeMode: 'contain',
})`
height:300;
width:100%;
`;

const TitleText = Styled.Text`
font-size: 20px;
font-weight: bold;
color: #ec6337;
letter-spacing: 0.5px;
`;

const FormContainer = Styled.View`
  width: 330px;
  margin-bottom: 20px;
`;
const TitleContainer = Styled.View`
  flex: 1;
  margin-top: 12px;
  align-items: flex-start;
`;

const InputTextName = Styled.Text`
  color: #EC6337;
  font-weight: normal;
  font-size: 14px;
`;
const FormAndButton = Styled.View`
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ButtonContainer = Styled.View`
  flex: 1;  
  margin-bottom: 15px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const E0_MyCook = props => {
  const [Title, setTitle] = useState('');

  const [Order_one, setOrder_one] = useState('');
  const [Order_two, setOrder_two] = useState('');
  const [Order_three, setOrder_three] = useState('');
  const [Ingredient_one, setIngredient_one] = useState('');
  const [Ingredient_two, setIngredient_two] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [imageURI, setImageURI] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const uploadFile = () => {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      if (response.didCancel) {
        alert('사진 선택을 취소하였습니다.');
      } else if (response.error) {
        alert('문제가 발생하였습니다: ', response.error);
      } else {
        setImageURI({uri: response.uri});
        console.log(
          'My file storage reference is : ',
          createStorageReferenceToFile(response),
        );
        Promise.resolve(uploadFileToFireBase(response));
      }
    });
  };

  const uploadFileToFireBase = imagePickerResponse => {
    const fileSource = getFileLocalPath(imagePickerResponse);
    const storageRef = createStorageReferenceToFile(imagePickerResponse);
    return storageRef.putFile(fileSource).then(function(result){
      storageRef.getDownloadURL().then(function(result){
        setImageURL(result);
        console.log(result);
      })
    });
  };

  const getURL = imagePickerResponse => {
    const storageRef = createStorageReferenceToFile(imagePickerResponse);
    storageRef.getDownloadURL().then(url => {
      setImageURL(url);
      console.log('URL: ', url);
      console.log('imageURL:', imageURL)
    });
  };

  const createStorageReferenceToFile = response => {
    const {fileName} = response;
    return FireBaseStorage.ref(fileName);
  };

  const getFileLocalPath = response => {
    const {path, uri} = response;
    return Platform.OS === 'android' ? path : uri;
  };

  const imagePickerOptions = {
    title: '사진 선택',
    takePhotoButtonTitle: '카메라',
    chooseFromLibraryButtonTitle: '이미지 선택',
    cancelButtonTitle: '취소',
    noData: true,
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log(user.displayName);
  }
  function addData() {
    if (Title == '') {
      alert('레시피명이 비었습니다.');
    } else if (Order_one == '' && Order_two == '' && Order_three == '') {
      alert('순서가 비었습니다.');
    } else if (Ingredient_one == '' && Ingredient_two == '') {
      alert('재료가 비었습니다.');
    } else {
      const ref = firestore().collection('recipe');
      const titleRef = ref.doc(Title);
      titleRef
        .set({
          title: Title,
          uid: user.uid,
          userName: user.displayName,
          order: [Order_one, Order_two, Order_three],
          ingredient: [Ingredient_one, Ingredient_two],
          imageURL: imageURL,
          like: 0,
        })
        .then(() => {
          console.log('ADD!');
          alert(Title + '이 레시피에 추가되었습니다.');
        });
    }
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <Container>
      <TitleContainer>
        <TitleText>레시피를 작성해주세요</TitleText>
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
        <FormAndButton>
          <ImgAddButton title="요리사진 선택" onPress={uploadFile} />
          {imageURI && <Picture source={imageURI} />}
        </FormAndButton>
      </ScrollView>
      <ButtonContainer>
        <Button
          style={{marginBottom: 24}}
          title="레시피 추가"
          onPress={() => {
            addData();
            console.log(imageURL);
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

export default E0_MyCook;
