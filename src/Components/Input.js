import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
  height: 41px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  background: rgba(196, 196, 196, 0.7);
`;
const InputField = Styled.TextInput`
  flex: 1;
  font-size: 13px;
`;

const Input = ({
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}) => {
  return (
    <Container style={style}>
      <InputField
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
