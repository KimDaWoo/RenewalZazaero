import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LongInput = ({ placeholder, value, onChangeText, secure, extraStyles, editable, keyboardType, maxLength}) => {
  const [isFocused, setIsFocused] = useState(false);
    return (
      <TextInput
          style={[styles.input, isFocused && styles.inputFocused, extraStyles]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry = {secure}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable} // 편집 가능 여부
          keyboardType = {keyboardType}
          maxLength = {maxLength}
      />
    );
};

const styles = StyleSheet.create ({
  
  input : {
    height: 40,
    width: "100%",
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 14,
    marginBottom: 14,
    paddingLeft : 16,
    fontWeight: "400"
  },
  inputFocused : {
    borderWidth: 2,
    borderColor: '#6C6C6C'
  }
})


export default LongInput;