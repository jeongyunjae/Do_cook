import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

/**
 * Home screen
 */
export default class A3_EmailAuth extends React.Component {

    static navigationOptions = {
        title: 'A3_EmailAuth',
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Email Authentication</Text>
                <Button
                    title="Next"
                    onPress={() => navigate(
                        'Main'
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