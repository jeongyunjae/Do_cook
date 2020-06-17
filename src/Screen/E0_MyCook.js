import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/button/weColorButton';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
//import { downloadingURL, imagePickerOptions, createStorageReferenceToFile, uploadFileToFireBase } from '~/utils';

const FireBaseStorage = storage();

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
  justify-content: center;
  width: 300px;
  margin-bottom: 10px;
  border-bottom-width: 0.8px;
  border-color: black;
`;
const TitleContainer = Styled.View`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const InputTextName = Styled.Text`
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
  margin-bottom: 25px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const E0_MyCook = (props) => {
  const [Title, setTitle] = useState('');

  const [Order_one, setOrder_one] = useState('');
  const [Order_two, setOrder_two] = useState('');
  const [Order_three, setOrder_three] = useState('');
  const [Ingredient_one, setIngredient_one] = useState('');
  const [Ingredient_two, setIngredient_two] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [imageURI,setImageURI]= useState(null);
  const [imageURL,setImageURL]= useState(null) ;


  const uploadFile = () => {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      if (response.didCancel) {
        alert('사진 선택을 취소하였습니다.');
      } else if (response.error) {alert('문제가 발생하였습니다: ',   response.error);
      } else {
       setImageURI({ uri: response.uri });
        console.log('My file storage reference is : ', createStorageReferenceToFile(response));
        Promise.resolve(uploadFileToFireBase(response));
        console.log(imageURL);
      }}
    );
  };

  const uploadFileToFireBase = imagePickerResponse =>{
    const fileSource = getFileLocalPath(imagePickerResponse);
    const storageRef = createStorageReferenceToFile(imagePickerResponse);
    storageRef.getDownloadURL().then((url)=>{
      setImageURL(url);
    })
    return storageRef.putFile(fileSource);
}

const createStorageReferenceToFile = response =>{
    const {fileName} = response;
    return FireBaseStorage.ref(fileName);
};

const getFileLocalPath = response =>{
    const {path, uri} = response;
    return Platform.OS === 'android' ? path: uri;
};

const imagePickerOptions = {
    title:'사진 선택',
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
      .then(() => console.log('ADD!'));
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
        <FormContainer>
        <Button title="이미지 추가" onPress={uploadFile}/>
        {imageURI && <Picture source={imageURI} />}
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
    width: '100%',
    alignItems: 'center',
  },
  imageContainer:{
    borderWidth: 1,
    borderColor : 'black',
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
