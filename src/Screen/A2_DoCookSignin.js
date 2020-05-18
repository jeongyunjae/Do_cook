import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

/**
 * Home screen
 */
export default class A2_DoCookSignin extends React.Component {

    static navigationOptions = {
        title: 'A2_DoCookSignin',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Do Cook Sign in Page. If you press Next, EmailAuth</Text>
                <Button
                    title="Next"
                    onPress={() => navigate(
                        'EmailAuth'
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