import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CheckResult = ({ visible, text, success }) => {
  if (!visible) {
    return null;
  }
  return (
    <Text style={[styles.resultText, success ? styles.success : styles.failure]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  resultText: {
    marginTop: 8,
    fontSize: 14,
  },
  success: {
    color: 'green',
  },
  failure: {
    color: 'red',
  },
});

export default CheckResult;
