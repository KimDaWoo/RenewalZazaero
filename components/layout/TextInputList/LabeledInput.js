import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LabeledInput = ({ label, placeholder, value, onChangeText, secure }) => {
  const [isFocused, setIsFocused] = useState(false);
    return (
      <View style={styles.LabeledInputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry = {secure}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    );
};

const styles = StyleSheet.create ({
  LabeledInputContainer : {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label : {
    width: "20%",
    fontWeight: "600"
    
  },
  input : {
    height: 40,
    width: "72%",
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


export default LabeledInput;