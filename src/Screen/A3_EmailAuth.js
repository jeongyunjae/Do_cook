import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex: 1;
align-items: center;
justifyContent: center;
`;

const A3_EmailAuth = (props) => {

    const navigationOptions = {
        title: 'A3_EmailAuth',
    };
        const { navigate } = props.navigation;
        return (
            <Container>
                <Text>Email Authentication</Text>
                <Button
                    title="Next"
                    onPress={() => navigate(
                        'MainPage'
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

export default A3_EmailAuth;