import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Styled from 'styled-components/native';

import CookData from '~/Components/data/CookData';

const C2_DetailRecipe = navigation => {
  const myTitle = navigation.state.params;
  <View>
    <Text>{myTitle}</Text>
  </View>;
};

export default C2_DetailRecipe;
