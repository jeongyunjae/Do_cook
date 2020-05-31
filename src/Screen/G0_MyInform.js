import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const G0_MyInform = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log(user.displayName);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  if(!user){
    return(
      <View style={styles.container}>
      <Text>
        Please Login
      </Text>
    </View>
    )
  }
  return (
        <View style={styles.container}>
          <Text>
          Hi {user.email}!
          </Text>
          <Text>
            Your nickname is '{user.displayName}'
          </Text>
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

export default G0_MyInform;