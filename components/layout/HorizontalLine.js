import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%', // 전체 너비
    height: 1, // 1 픽셀 높이로 실선
    backgroundColor: 'gray', // 검정색
  },
});

export default HorizontalLine;
