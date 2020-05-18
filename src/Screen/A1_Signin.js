import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

/**
 * Home screen
 */
export default class A1_Signin extends React.Component {

    static navigationOptions = {
        title: 'A1_Signin',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
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
                
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});