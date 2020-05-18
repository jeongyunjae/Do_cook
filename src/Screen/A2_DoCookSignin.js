import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex: 1;
align-items: center;
justifyContent: center;
`;

const A2_DoCookSignin = (props) => {

    const navigationOptions = {
        title: 'A2_DoCookSignin',
        };
        const { navigate } = props.navigation;

        return (
        <Container>
            <Text>Do Cook Sign in Page. If you press Next, EmailAuth</Text>
            <Button
            title="Next"
            onPress={() => navigate('EmailAuth')}
            />
            <Button
            title="Back to Start"
            onPress={() => navigate('Start')}
            />
        </Container>
        );
    }

export default A2_DoCookSignin;