import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex: 1;
align-items: center;
justifyContent: center;
`;

    const A1_Signin = (props) => {

    const navigationOptions = {
        title: 'A1_Signin',
    };
        const { navigate } = props.navigation;
    /*state = { email: '', password: '', errorMessage: null }
    handleSignUp = ()=>{
        //Todo : firebase stuff
        console.log('handleSignUp')
    }*/
        return (
            <Container>
                <Text>Sign in Page. If you press Next, EmailAuth</Text>
                <Button
                    title="Next"
                    onPress={() => navigate(
                        'DoCookSignin'
                    )}
                />
                <Button
                    title="Back to Start"
                    onPress={() => navigate(
                        'Start'
                    )}
                />
            </Container>
        );
    }

export default A1_Signin;