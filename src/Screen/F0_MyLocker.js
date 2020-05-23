import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const F0_MyLocker = () => {
    return (
        <View style={styles.container}>
          <Text>보관함</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default F0_MyLocker;